import React, {  } from 'react'
import './ProductItem.css'
import NavBar from '../../Components/Navbar/NavBar'
import ProductDetails from '../../Components/Product-Details/ProductDetails'
import ProductHeader from '../../Components/Product-Header/ProductHeader'
import ProductImage from '../../Components/Product-Image/ProductImage'
import Description from '../../Components/Description/Description'
import Footer from '../../Components/Footer/Footer'




function ProductItem() {

 


 


  return (
    <>
      <NavBar />
      <ProductHeader />

      <div className='Products'>
        <ProductImage />
        <ProductDetails />
      </div>

      <Description />
      <Footer />
    </>
  )
}

export default ProductItem