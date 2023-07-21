import React from 'react';
import Testimonial from './components/Testimonial';
import reviews from './data';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-gray-200'>
      <div className='text-center flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='flex justify-center w-[100%] h-[10%]'>
          <div className='bg-violet-400 h-[0.3rem] w-[5rem] mt-7'></div>
        </div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
