import React from 'react'

function Card() {
  return (
    <div className="w-[300px] rounded-md border">
  <img
    src='pexels-ekrulila-21369952.jpg'
    alt="Zairza"
    className="h-[200px] w-full rounded-2xl object-cover p-2"
  />
  <div className='m-5 flex justify-between items-center '>
  <div className=" font-semibold inline-block text-lg">Dig the Web</div>
    <button
      type="button"
      className="h-10 w-20 rounded bg-blue-900 px-2.5 py-1 text-[12px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Enroll Now
    </button>
  </div>
  <div className='mx-5 text-xs text-gray-400 font-semibold flex justify-between'>
    <div>Date & Time</div>
    <div className=' mr-12'>Venue</div>
  </div>
  <div className='mx-5 mb-4 font-semibold text-sm flex justify-between'>
    <div>27 Apr - 9:00 AM</div>
    <div className=' mr-6'>SAC Area</div>
  </div>
</div>

  )
}

export default Card

