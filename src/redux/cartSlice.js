import { createSlice } from '@reduxjs/toolkit'

const cartSlice= createSlice({

    name: 'cart',

    initialState:{
        slide: false,
        orders: [],
        totalPrice: 0,
        cartState: 0,
        orderNumber: Math.floor(Math.random()*100)
    },

    reducers:{
        slideCart(state,action){
            state.slide = action.payload
        },

        addCardToCart(state, action){
            if (!action.payload.ordered)
                state.orders.push(action.payload)
            else{
                state.orders.splice(state.orders.findIndex(e=>e.id === action.payload.id),1)  
            }

            if (state.orders.length)
                state.cartState=1
        
             else if (!state.orders.length)
                state.cartState=0
            
        },

        removeOrder(state,action){
         
            state.orders.splice(state.orders.findIndex(e=>e.id === action.payload.id),1) 
            
            if (state.orders.length)
                state.cartState=1
        
             else if (!state.orders.length)
                state.cartState=0
                
        },

        sumTotalPrice(state){
            state.totalPrice=state.orders.reduce((acc, total)=>acc+total.price,0)
        },

        changeCartState(state, action){
            state.cartState=action.payload
        }
    }
})

export const {slideCart,addCardToCart,sumTotalPrice,removeOrder,changeCartState} = cartSlice.actions

export default cartSlice.reducer