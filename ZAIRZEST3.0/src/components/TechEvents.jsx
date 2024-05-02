import React from 'react'
import Card from './Card'
import { img1,img2,img3,img4,img5,img6 } from '../../public/images/image'

function TechEvents() {
  return (
    <div className='m-20'>
    <h1 className='text-5xl font-bold outline-none mb-8'>Tech Events</h1>
    <div className='flex flex-wrap justify-between'>
    <Card eventImg={img1} eventName='Dig The Web'/>
    <Card eventImg={img2} eventName='CP Rush'/>
    <Card eventImg={img3} eventName='Robo Soccer'/>
    <Card eventImg={img4} eventName='Ideathon'/>
    <Card eventImg={img5} eventName='H2GO'/>
    <Card eventImg={img6} eventName='Design X UI'/>
    </div>
    </div>
  )
}

export default TechEvents