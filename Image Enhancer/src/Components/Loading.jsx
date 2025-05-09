import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-[400px] mt-10 flex items-center justify-center bg-gray-100 rounded-xl shadow-md">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
