import React, { useState } from 'react';
import { CloudUpload, Loader2, Mic, X, Check, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file) => {
    const validTypes = ['audio/wav', 'audio/mpeg'];
    const validExtensions = ['.wav', '.mp3'];
    const fileExtension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();

    if (validTypes.includes(file.type) || validExtensions.includes(fileExtension)) {
      setSelectedFile(file);
      setResult(null);
      setError(null);
    } else {
      setError('Please upload a WAV or MP3 audio file.');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('No file selected.');
      return;
    }

    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/predict`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.CNN || !data.DNN || !data.confidence) {
        throw new Error('Invalid response format from server');
      }

      setResult(data);
    } catch (err) {
      console.error('Prediction error:', err);
      setError(err.message || 'Prediction failed. Please try again.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <h1 className="text-3xl font-bold text-center">Audio Deepfake Detection</h1>
          <p className="text-center text-indigo-100 mt-2">
            Upload an audio file to detect potential deepfake manipulation
          </p>
        </div>

        <div className="p-8">
          {/* File Upload Area */}
          <div 
            className={`border-2 border-dashed rounded-xl transition-all duration-300 ${
              dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <label className="flex flex-col items-center justify-center p-8 cursor-pointer">
              <CloudUpload className="text-indigo-500 mb-4" size={48} strokeWidth={1.5} />
              <p className="text-lg font-medium text-gray-700 mb-1">
                {selectedFile ? selectedFile.name : 'Drag & drop audio file here'}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Supported formats: .wav, .mp3
              </p>
              <div className="relative">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                  Browse Files
                </button>
                <input
                  type="file"
                  accept=".wav,.mp3,audio/wav,audio/mpeg"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center"
            >
              <AlertTriangle className="mr-2" size={18} />
              <span>{error}</span>
            </motion.div>
          )}

          {/* Selected File Preview */}
          <AnimatePresence>
            {selectedFile && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 flex items-center justify-between bg-gray-50 p-3 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-indigo-100 rounded-full mr-3">
                    <Mic className="text-indigo-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 truncate max-w-xs">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={removeFile}
                  className="p-1 text-gray-500 hover:text-red-500 transition"
                  aria-label="Remove file"
                >
                  <X size={18} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Analyze Button */}
          <button
            onClick={handleUpload}
            disabled={!selectedFile || loading}
            className={`w-full mt-6 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
              !selectedFile || loading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg'
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Analyzing Audio...
              </>
            ) : (
              <>
                <Mic size={20} />
                Detect Deepfake
              </>
            )}
          </button>

          {/* Results Display */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-8 p-6 bg-green-50 rounded-xl"
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="p-2 bg-green-100 rounded-full inline-flex mb-3">
                      <Check className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      Analysis Complete
                    </h3>
                    <p className="text-gray-600">
                      Results for your audio file
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* CNN Result */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-medium text-gray-500 mb-2">CNN Prediction</h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className={`h-2.5 rounded-full ${
                              result.CNN === 'Real' ? 'bg-green-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${result.confidence.CNN * 100}%` }}
                          ></div>
                        </div>
                        <span className={`font-bold ${
                          result.CNN === 'Real' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {result.CNN} ({(result.confidence.CNN * 100).toFixed(1)}%)
                        </span>
                      </div>
                    </div>

                    {/* DNN Result */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-medium text-gray-500 mb-2">DNN Prediction</h4>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className={`h-2.5 rounded-full ${
                              result.DNN === 'Real' ? 'bg-green-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${result.confidence.DNN * 100}%` }}
                          ></div>
                        </div>
                        <span className={`font-bold ${
                          result.DNN === 'Real' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {result.DNN} ({(result.confidence.DNN * 100).toFixed(1)}%)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">
                      Confidence scores show the model's certainty in its prediction
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;