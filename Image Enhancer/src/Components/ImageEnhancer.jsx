import React from 'react'
import ImageUpload from './ImageUpload'
import {toast} from 'react-toastify'
import { ImageEnhancing } from './Enhancing.js'
import { useState } from 'react'
import { createContext } from 'react'
import ImagePreview from './ImagePreview.jsx'
import Loading from './Loading.jsx'
import LoadingOverlay from './LoadingOverlay.jsx'

export const access = createContext()

const ImageEnhancer = () => {
  const [image, setImage] = useState(null)
  const [EnhancedImage, setEnhancedImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const imageHandler = async () => {
    try{
      setLoading(true)
      const EnImage = await ImageEnhancing(image)
      setEnhancedImage(EnImage.image)
    }
    catch(err) {
      toast.error(err.message)
    } 
    finally {
      setLoading(false)
    }
  }

  const states = {
    image,setImage,EnhancedImage, setEnhancedImage,imageHandler,loading
  }
  return (
    <div>
    <access.Provider value={states}>
    <LoadingOverlay/>
    <ImageUpload/>
    </access.Provider>
      
      
    </div>
  )
}

export default ImageEnhancer