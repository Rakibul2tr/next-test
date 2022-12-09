import React from 'react'
import {FaRegStar,FaStarHalf,FaStar} from 'react-icons/fa'

const Star = ({rating}) => {
    

  const RatingStar=  Array.from({ length: 5 }, (v, index) => {
        let number=index+0.5;
           return <span key={index} >
            {
              rating >= index+1?<FaStar className='text-warning'/>:rating >= number?<FaStarHalf className='text-warning'/>:<FaRegStar className='text-warning'/> 
            }
           </span>
            
        });

  return (
    <div>{RatingStar}</div>
  )
}

export default Star