import {  createStore , combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {getAllProducts} from './Reducers/Products'

export  const reducer = combineReducers({
    allProducts: getAllProducts,
    
    // pic: savePicReducer,


})
const initialState ={ 
    allProducts: {products: [{ 
        name: 'loading' , 
        catagory: 'maindish',
        price: 22,
    
    }]}
}

const middleware = [thunk]
const store =createStore(reducer,initialState,composeWithDevTools (applyMiddleware(...middleware)))

export default store