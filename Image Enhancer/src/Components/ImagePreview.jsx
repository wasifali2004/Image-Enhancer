import React, { useContext } from 'react'
import { access } from './ImageEnhancer'

const ImagePreview = () => {
  const { EnhancedImage } = useContext(access)

  return (
    <div>
      <div className='mt-15 bg-white shadow-xl rounded-2xl p-8 transition-all duration-200 hover:shadow-2xl'>
        {EnhancedImage ? (
          <img
            src={EnhancedImage}
            alt="Enhanced Preview"
            className="w-full h-auto rounded-lg"
          />
        ) : (
          <p className="text-gray-500 text-center">No enhanced image yet</p>
        )}
      </div>
    </div>
  )
}

export default ImagePreview
