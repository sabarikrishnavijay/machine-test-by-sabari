import React, { } from 'react'
import { useSelector } from 'react-redux'
import AddToCart from '../Buttons/Add-to-cart/AddToCart'
import Color from '../Buttons/Color/Color'
import Counter from '../Buttons/Counter/Counter'
import DropDown from '../Size-DropDown/DropDown'
import './ProductDetails.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'



function ProductDetails() {
    const { productName,
        productDescription,
        sku,
        price,
        color } = useSelector(state => state.product)
    const des = productDescription.slice(0, 60)


    // const selectedColor = colorSelected.color_name
    return (
        <div className='ProductDetails'>
            <div className='ProductDetailsBlock-One'>
                <h1 className='productName'>{productName}</h1>
                <p className='productPrice'><b>ADE: {price}</b></p>
                <p className='BlockMargin'>{des}... <AnchorLink href='#description' className='anchor'> <span> ReadMore... </span> </AnchorLink></p>
            </div>
            <div className='ProductDetailsBlock-Two'>
                <div className='Color-block'>
                    <p className='BlockMargin'> Color:</p>
                    {
                        color?.map((i, index) => {
                            return <Color key={index} {...i} />
                        })
                    }
                </div>
                <div>
                    <p className='BlockMargin'> Size:</p>
                    <DropDown />
                </div>
            </div>

            <div className='ProductDetailsBlock-Three'>
                <div className='ProductDetails-Counter'>
                    <Counter />
                </div>

                <div>
                    <AddToCart />
                </div>
            </div>

            sku:{sku}
        </div>


    )
}

export default ProductDetails