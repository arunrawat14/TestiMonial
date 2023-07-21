import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'

export default function Card(props) {

    let review = props.review

  return (
    <div className='flex flex-col md:relative   '>

<div className='relative'>
        <img
          src={review.image}
          alt='images'
          className='rounded-full w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] top-[-75px] left-[10px] absolute z-10 aspect-square'
        />
        <div className='bg-violet-400 w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] rounded-full absolute left-[20px] top-[-75px] z-0'></div>
      </div>

        <div className='text-center mt-7'>
            <p className='text-2xl font-bold capitalize '>{review.name}</p>
        </div>

        <div className='text-center mt-7'>
            <p className=' text-violet-400 uppercase text-sm '>{review.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5' >
            <FaQuoteLeft/>
        </div>

        <div className='mt-5 text-slate-500 w-full md:w-[35vw] whitespace-pre-line text-justify  '>
            {review.text}
         
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>

       



    </div>
  )
}
