import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        changeCart: false,
    },
    reducers: {
        replaceCart(state, action){
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addToCart(state, action){
            state.changeCart = true;
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            }
            else{      
                existingItem.quantity++;          
                existingItem.totalPrice = existingItem.totalPrice+ newItem.price;
            }
        },
        removeFromCart(state, action){
            state.changeCart = true;
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity == 1){
                state.items = state.items.filter(item => item.id != id);
            }
            else {    
                existingItem.quantity--;            
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }         

        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;