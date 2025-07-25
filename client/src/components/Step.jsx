import React from 'react'
import { stepsData } from '../assets/assets'


const Step = () => {
  return (
    <div className='flex flex-col items-center justify-center my-32'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
        <p className='text-lg tetx-gray-600 mb-8'>Transform Words Into Stunning Images</p>
        <div className='space-y-4 w-full max-w-3xl text-sm'>
           {stepsData.map((item, index)=>(
            <div className='flex items-center gap-4 p-5 px-8 bg-white/50 shadow border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg' key={index}>
                <img width={40} src={item.icon} alt="step-icon" />
                <div>
                    <h2 className='text-xl font-medium'>{item.title}</h2>
                    <p className='text-gray-500'>{item.description}</p>
                </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default Step