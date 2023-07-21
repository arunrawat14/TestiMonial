import React from 'react';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card from './Card';


export default function Testimonial(props) {
  let reviews = props.reviews
  const [index, setIndex] = useState(0);
  

  function leftClickHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightClickHandler() {
    if (index + 1 === reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * reviews.length);
  };

  function surpriseHandler() {
    setIndex(generateRandomNumber());
  }

  return (
    <div className='bg-white gap-7 w-full md:w-[40vw] hover:shadow-lg mt-10 p-10 transition-all duration-700 flex justify-center flex-col items-center'>
      <Card review={reviews[index]} />

      <div className='text-violet-400 mx-auto mt-5 text-3xl font-bold gap-3 flex'>
        <button
          className='hover:text-violet-500'
          onClick={leftClickHandler}
        >
          <FiChevronLeft />
        </button>
        <button
          className='hover:text-violet-500'
          onClick={rightClickHandler}
        >
          <FiChevronRight />
        </button>
      </div>

      <div className=''>
        <button
          onClick={surpriseHandler}
          className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold mb-5 text-white'
        >
          Surprise me
        </button>
      </div>
    </div>
  );
}
