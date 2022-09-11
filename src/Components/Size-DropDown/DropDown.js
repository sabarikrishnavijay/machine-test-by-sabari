import React, { useEffect,  } from 'react'
import './DropDown.css'
import { useDispatch,useSelector } from 'react-redux'
import {changeProductSize} from '../../Features/ProductSlice'

function DropDown() {
  const dispatch = useDispatch()
  const { colorSelected } =useSelector(state=>state.product)
 
  const sizeHandler = (e) => {
    dispatch(changeProductSize(e.target.value))
    
  }
  useEffect(() => {
  
},[colorSelected])


  return (
      <select  onChange={sizeHandler}>
          <option value='S' >S</option>
      <option value='M' > M </option>
          <option value='L' >L</option>
          <option value='XL' >XL</option>
        
          
      </select>
  )
}

export default DropDown