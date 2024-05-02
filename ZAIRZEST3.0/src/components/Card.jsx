import React from 'react'
import { img1 } from '../../public/images/image'


function Card({eventImg, eventName = 'Dig The Web', dateandtime = '27 Apr - 9:00 AM', venue = 'SAC Area'}) {
  return (
    <div className="w-[400px] rounded-md border">
  <img
    src={eventImg}
    alt="Zairza"
    className="h-[500px] w-full rounded-xl object-cover p-2"
  />
  <div className='m-5 flex justify-between items-center '>
  <div className=" font-semibold inline-block text-xl">{eventName}</div>
    <button
      type="button"
      className="text-lg h-12 w-36 rounded-lg bg-blue-950 px-2.5 py-1 text-[12px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Enroll Now
    </button>
  </div>
  <div className='mx-5 text-xs text-gray-400 font-semibold flex justify-between'>
    <div>Date & Time</div>
    <div className=' mr-12'>Venue</div>
  </div>
  <div className='mx-5 mb-4 font-semibold text-sm flex justify-between'>
    <div>{dateandtime}</div>
    <div className=' mr-6'>{venue}</div>
  </div>
</div>

  )
}

export default Card

