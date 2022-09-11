import React from 'react'
import './Color.css'
import { useDispatch } from 'react-redux'
import { changeSelectedColor } from '../../../Features/ProductSlice'

function Color({ color_code }) {
  const dispatch = useDispatch()
  
  return (
    <button onClick={() => dispatch(changeSelectedColor(color_code))} className='Color' style={{ backgroundColor:color_code}}>
          
    </button>
  )
}

export default Color