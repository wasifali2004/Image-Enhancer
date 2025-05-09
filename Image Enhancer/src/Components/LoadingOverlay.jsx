import React, { useContext } from 'react'
import { access } from './ImageEnhancer'

const LoadingOverlay = () => {
  const { loading } = useContext(access)

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center">
        <div className="loader mb-4"></div>
        <p className="text-lg font-semibold text-gray-700">Enhancing your image...</p>
      </div>
    </div>
  )
}

export default LoadingOverlay
