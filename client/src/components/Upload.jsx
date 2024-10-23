import React from 'react'
import { assets } from '../assets/assets'

function Upload() {
  return (
    <div className='pb-16'>
      <h1 className='mb-12 sm:mb-20
        text-center text-2xl md:text-3xl py-5 md:py-16 lg:text-4xl mt-4 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent  font-semibold'>Customer Testimonials</h1>
    

    <div className="text-center mb-24">
          <input type="file" name="" id="upload1" hidden />
          <label
            className="inline-flex gap-5 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700  "
            htmlFor="upload1"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className="text-white text-sm">Upload Your Image</p>
          </label>
        </div>

    
    
    
    
    </div>
  )
}

export default Upload
