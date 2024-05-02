import React from 'react'
import { img11,img12,img13,img14 } from '../../public/images/image'

function Workshops() {
  return (
    <div className='m-40'>
    <div className='text-5xl font-bold outline-none inline-block mb-8'>Team full of enthusiasm <br /> and creativity</div>
    <p className='text-xl'>
    A society, a club, a family, Zairza is the premiere technical club of the college, pushing the boundaries of innovation in
    <br />
    <br />
    the field of Robotics, Software, and Design. We firmly believe in our motto “Wonder, Think, Create” and strive forward
    <br />
    <br />
    to make it a reality. The club was started in 2005 and was formally inducted as a central club of the college in 2007.
    <br />
    <br />
    Since its inception, the club members have worked tirelessly and also achieved numerous laurels in a variety of fields.
    <br />
    <br />
    <br />
    <br />
    The aim we hold is to provide students the right direction to walk in their career with their utmost ability gained through the regular sessions that are held for the students. With your right skills, we provide internship offers that give a real-time experience at an industry level and help you know your true potential. What’s more interesting is the location of where we are i.e. the center of attraction of the college which is the SAC area that allows students to access their needs easily. 
    </p>
    <br />
    <br />
    <br />
    <br />
    <div className='flex flex-wrap'>    
        <div style={{width:'50%'}}><img style={{height:'100%'}} className='object-cover' src={img11} alt="Zairza"/></div>
        <div style={{width:'50%'}}><img style={{height:'100%'}} className='object-cover' src={img12} alt="Zairza" /></div>
        <div style={{width:'50%'}}><img style={{height:'100%'}} className='object-cover' src={img13} alt="Zairza" /></div>
        <div style={{width:'50%'}}><img style={{height:'100%'}} className='object-cover' src={img14} alt="Zairza" /></div>
    </div>   
    </div>
  )
}

export default Workshops