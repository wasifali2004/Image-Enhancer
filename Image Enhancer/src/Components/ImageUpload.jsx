import React, { useState, useRef, useContext } from 'react';
import { FiUpload, FiImage } from 'react-icons/fi';
import ImagePreview from './ImagePreview';
import Loading from './Loading';
import { access } from './ImageEnhancer';

const ImageUpload = () => {
  const resultRef = useRef();
  const { image, setImage, EnhancedImage, setEnhancedImage,imageHandler } = useContext(access);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ new loading state

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setImage(file);
  };

  const HandleEnhanceClick = async () => {
    setLoading(true);              
    setEnhancedImage(null);
    await imageHandler()       
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      setLoading(false);
      setEnhancedImage(preview); // ✅ You should replace this with actual enhanced image
    }, 2000);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50'>
      <div className='w-full max-w-3xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>Upload Your Image</h1>
          <p className='text-gray-600'>Enhance your photos with our AI-powered tools</p>
        </div>

        {/* Upload Area */}
        <div className='bg-white shadow-xl rounded-2xl p-8 transition-all duration-200 hover:shadow-2xl'>
          <label
            htmlFor="fileInput"
            className={`flex flex-col items-center justify-center cursor-pointer h-64 border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${
              isDragging ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="fileInput"
              className='hidden'
              accept="image/*"
              onChange={handleFileChange}
            />

            {preview ? (
              <div className="relative w-full h-full">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                  <FiUpload className="text-white text-4xl" />
                </div>
              </div>
            ) : (
              <>
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FiUpload className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  {isDragging ? 'Drop your image here' : 'Click to upload or drag and drop'}
                </h3>
                <p className="text-gray-500 text-sm">Supports JPG, PNG, WEBP (Max. 10MB)</p>
              </>
            )}
          </label>

          {/* Action Buttons */}
          {preview && (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={HandleEnhanceClick}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Enhance Image
              </button>
              <button
                onClick={() => {
                  setPreview(null);
                  setEnhancedImage(null);
                }}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Results / Features */}
        <div ref={resultRef} className="mt-8">
          {image ? (
            loading ? (
              <Loading />
            ) : EnhancedImage ? (
              <ImagePreview EnhancedImage={EnhancedImage} />
            ) : null
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <FiImage className="text-blue-500 mr-3" />
                <span className="text-gray-700">High-quality enhancement</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <FiImage className="text-blue-500 mr-3" />
                <span className="text-gray-700">Fast processing</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <FiImage className="text-blue-500 mr-3" />
                <span className="text-gray-700">Secure uploads</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
