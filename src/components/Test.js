import React, { useEffect, useState } from 'react'

const Test = () => {
    const [x,setX]=useState(0);

    useEffect(()=>{
        let i=setInterval(()=>{
            console.log("Hello "+Math.random()+" 🚀");
        },1000)

        return ()=>clearInterval(i)
    },[])

  return (
    <div className='col-span-11'>
        {x}
        <div></div>
        <button className="border border-red-300" onClick={()=>setX(x+1)}>Change X</button>
    </div>
  )
}

export default Test