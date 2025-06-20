
import React, { useState } from 'react';
import { CloudUpload, Loader2, Mic, X, Check, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

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
    const file = e.dataTransfer.files[0];
    validateAndSetFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file) => {
    if (file && (file.type === 'audio/wav' || file.type === 'audio/mp3' || file.name.endsWith('.wav') || file.name.endsWith('.mp3'))) {
      setSelectedFile(file);
      setResult(null);
    } else {
      alert('Please upload a WAV or MP3 audio file.');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('No file selected.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      // Simulate API call (replace with your actual API endpoint)
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Server error during prediction');
      }

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error(error);
      setResult({ error: 'Prediction failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-4 mt-8">
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
                Supported formats: .wav
              </p>
              <div className="relative">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                  Browse Files
                </button>
                <input
                  type="file"
                  accept=".wav"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </label>
          </div>

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
                    <p className="font-medium text-gray-800">{selectedFile.name}</p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={removeFile}
                  className="p-1 text-gray-500 hover:text-red-500 transition"
                >
                  <X size={18} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

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

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mt-8 p-6 rounded-xl ${
                  result.error ? 'bg-red-50' : 'bg-green-50'
                }`}
              >
                {result.error ? (
                  <div className="flex flex-col items-center text-center">
                    <div className="p-2 bg-red-100 rounded-full mb-3">
                      <AlertTriangle className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-red-700 mb-1">Error</h3>
                    <p className="text-red-600">{result.error}</p>
                  </div>
                ) : (
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
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-gray-500 mb-2">CNN Prediction</h4>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${result.CNN}` }}
                            ></div>
                          </div>
                          <span className="text-blue-600 font-bold">
                            {(result.CNN)}
                          </span>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <h4 className="font-medium text-gray-500 mb-2">DNN Prediction</h4>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-purple-600 h-2.5 rounded-full"
                              style={{ width: `${result.DNN}` }}
                            ></div>
                          </div>
                          <span className="text-purple-600 font-bold">
                            {(result.DNN)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500">
                        Higher percentages indicate higher confidence of deepfake detection
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;