import React,{useState,useEffect} from 'react'
import './Counter.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function Counter() {
    const [count, setCount] = useState(0)
    const Decrement = () => {
        if (count !== 0) {
         setCount(count-1)
     }
  }
    const Increment = () => {
       
         setCount(count+1)
     
    }
    useEffect(() => {
        
    },[count])


    
  return (
      <div className='Counter'>
          <button className='CounterButton' onClick={()=>{Decrement()}}> <AiOutlineMinus className='CounterIcons'/></button>
          <div className='CounterValue'>
              {count}
          </div>
          <button className='CounterButton' onClick={() => { Increment ()}}> <AiOutlinePlus className='CounterIcons'/></button>
    </div>
  )
}

export default Counter