import React from 'react'
import { img7,img8,img9,img10 } from '../../public/images/image'
import Card from './Card'
function FunEvents() {
  return (
    <div className='m-20'>
    <h1 className='text-5xl font-bold outline-none mb-8'>Fun Events</h1>
    <div className='flex flex-wrap justify-between'>
    <Card eventImg={img7} eventName='Twist'/>
    <Card eventImg={img8} eventName='Paper Dance'/>
    <Card eventImg={img9} eventName='Treasure Hunt'/>
    <Card eventImg={img10} eventName='Jamming Night' dateandtime='17 Oct - 5:00 PM Onwards'/>
    </div>
    </div>
  )
}

export default FunEvents