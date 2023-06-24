import React from 'react'
import Button from './Button'

const LIST = ["All","Kapil Sharma","Computer Programming","Routers","Live","Motivation","Gadgets","Body-Building","Cloud Computing","ReactJS Interview"]

const ButtonList = () => {
  return (
    <div className='flex justify-center items-center'>
      {LIST.map(item=>{
        return <Button name={item} key={item}/>
      })}
    </div>
  )
}

export default ButtonList