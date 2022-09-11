import React from 'react'
import './Description.css'
import {useSelector} from 'react-redux'
function Description() {

  const { productDescription }= useSelector(state=>state.product)
  return (
    <div className='Description' id='description'>
          
          <div>
              <h1>Description</h1>
          </div>
          <div className='Description-Box'>
        {productDescription}
              
          </div>
    </div>
  )
}

export default Description