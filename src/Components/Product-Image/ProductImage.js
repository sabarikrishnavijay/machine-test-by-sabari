import React, {  useLayoutEffect } from 'react'
import './ProductImage.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { imageIncrementHandler, imageDecrementHandler, imageChangeOnThumb } from '../../Features/ProductSlice'


function ProductImage() {
  const dispatch = useDispatch()
  const { image,  imageIndexValue } = useSelector(state => state.product)



  useLayoutEffect(() => {
  //  console.log('hi');

  }, [imageIndexValue])




  if (!image) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className='ProductImage'>

      <div className='Image-container'>
        <button className='image-button' onClick={() => {
          dispatch(imageDecrementHandler())
        }} > <BsFillArrowLeftCircleFill className='image-page-icons' />
        </button>

        {
          image?.map((item, index) => {
            return (
              <div className={(imageIndexValue === index) ? "Image" : 'Imageblock'} key={index}>
                <img src={item} alt={ 'image1'} />

              </div>
            )
          })
        }

        <button className='image-button'
          onClick={() => { dispatch(imageIncrementHandler()) }}>
          <BsFillArrowRightCircleFill className='image-page-icons' />
        </button>


      </div>
      <div className='thumb-container'>
        <div className='Image-thumb'>
          {image?.map((item, index) => {
            return (
              <div className={(imageIndexValue === index) ? "small-thumb-withBorder" : "small-thumb"} key={index}>
                <img src={item} alt={'image1'} onClick={() => { dispatch(imageChangeOnThumb(index)) }} />
              </div>
            )
          })}


        </div>

      </div>
    </div>
  )
}

export default ProductImage