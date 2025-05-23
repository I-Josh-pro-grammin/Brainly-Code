import React from 'react'
import { TextGenerateEffect } from './TextGenerate'

const Introductory = () => {
  return (
    <div className='w-[50%]'>
      <div className='inline w-[40%] m-10'>
        <h1 className='font-bold text-6xl'>Learn To <span className="text-purple-500"> Code</span> The Fun Way</h1>
        <p className='text-sm my-5'>Interactive lessons, fun challenges and Projects designed for young coders and designer of young coders and beginners of all ages</p>
        <div className="mt-4">
          <button className="bg-gradient-to-r from-[#00ffff] to-purple-400 rounded mr-10 px-3 py-2">Start Learning Free</button>
          <button className="bg-[#1e145e] hover:bg-[#140e3f] ml-10 border-3 px-3 p-2">Explore Features</button>
        </div>
      </div>
    </div>
  )
}

export default Introductory
