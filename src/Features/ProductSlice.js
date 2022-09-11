import { createSlice, createAsyncThunk,current } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = "https://backprocess.balaclavafashion.com/api/v1/getProductsDetails?product_id=67"


const initialState = {
    product: null,
    productName: '',
    productDescription: '',
    sku: '',
    price: '',
    colorSelected: '',
    image: null,
    color: null,
    price_array: [],
    imageIndexValue:'',
 
    isLoading: false

}

export const getProductItem = createAsyncThunk('product/getProductItem',
    async () => {
        try {
           
            const { data } = await axios(URL)
         
            return data

        } catch (error) {

        }
    }
)


const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        apiDataCall: async (state) => {
         
            const { data } = await axios(URL)
            console.log(data);
            state.product = data

        },

        changeProductSize: (state, {payload}) => {
           
            
            const data = current(state.price_array)
            const price = data.filter(i => {
             return   i.size_attribite_name === payload
            
         })
            if (price.length !== 0) {
                
                state.price = price[0].product_price
                state.sku = price[0].product_sku
            } else {
                state.price = 'no match found'
                state.sku=''
            }
            

        } ,
        
        changeSelectedColor: (state, { payload }) => {
            const color=current(state.color)
            const data = color.filter(item => {
                return item.color_code===payload
            })
            
            state.colorSelected = data[0].color_name
            state.price_array = data[0].prize_array
            if (data[0].color_name === "White") {
                state.imageIndexValue = 3
                return
            } else {
                state.imageIndexValue = 0
                return
            }
             
        },
        imageChange: (state) => {
            const data = current(state.colorSelected)
          
            if (data === 'White') {
                state.imageIndexValue=3
            }
            else {
                state.imageIndexValue=0
            }
    
},
        imageChangeOnThumb: (state,{payload}) => {
            state.imageIndexValue=payload
    
},

        imageDecrementHandler : (state) => {
            if (state.imageIndexValue !== 0) {
                state.imageIndexValue=(state.imageIndexValue - 1)
            }
        },
        imageIncrementHandler : (state) => {
            if (state.imageIndexValue !== 5) {
                state.imageIndexValue=(state.imageIndexValue + 1)
            }
        },
    },
    extraReducers: {
        [getProductItem.pending]: (state) => {
           
            state.isLoading = true
        },
        [getProductItem.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            // console.log(payload);
            state.product = payload.product_details
            state.productName = payload.product_details.product_name
            state.productDescription = payload.product_details.product_description
            state.sku = payload.product_details.product_sku
            state.price = payload.product_details.product_price
            state.image = payload.product_details.product_images
            //console.log(payload.product_details.color)
            payload.product_details.color.forEach(item => {
                if (item.selected === 1) {
                    state.colorSelected = item.color_name
                    state.price_array = item.prize_array
                    if (item.color_name === "White"){
                        state.imageIndexValue=3
                    } else {
                        state.imageIndexValue=0
                    }
                    
                    return
                }
            })
            state.color = payload.product_details.color


        },
        [getProductItem.rejected]: (state) => {
            state.isLoading = false
           
        }

    }

})

//console.log(productSlice);
export const { apiDataCall, changeProductSize, changeSelectedColor, imageDecrementHandler, imageIncrementHandler, imageChangeOnThumb } = productSlice.actions
export default productSlice.reducer