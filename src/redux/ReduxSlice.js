import { createSlice } from "../../node_modules/@reduxjs/toolkit/dist/index";


const initialState={
    productData:[],
    userInfo : null,
}

export const reduxslice = createSlice({
    name : "slice",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
const item = state.productData.find(
    (item)=> item._id === action.payload._id
);
if(item && action.payload.action == 'reduce' ){
    item.quantity -= action.payload.quantity
}else if(item){
    item.quantity += action.payload.quantity
}else{
    state.productData.push(action.payload)
}
        },

deleteItem:(state, action)=>{
    state.productData = state.productData.filter(
        (item)=> item._id !== action.payload
    );
},

resetCart : (state) =>{
    state.productData = [];
},

incrementQty : (state, action)=>{
    const item = state.productData.find(
        (item)=> item._id ===action.payload._id
    );
    if(item){
        item.quantity++;
    }
},

decrementQty: (state, action)=>{
    const item = state.productData.find(
        (item) => item._id = action.payload._id
    );
    if(item.quantity === 1){
        item.quqntity = 1;
    } else {
item.quantity --;
    }
}

    },
});

export const {addToCart, deleteItem, resetCart, incrementQty, decrementQty} = reduxslice.actions;
export default reduxslice.reducer;