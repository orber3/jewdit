import axios from 'axios';
import {PRODUCTS_LIST_FAIL , PRODUCTS_LIST_REQUEST , PRODUCTS_LIST_SUCCESS} from './Constants';

const BASE_URL = '/products/'
export const listAllProducts = () => async (dispatch,cat) =>  {
  try { 

      dispatch({ 
          type:  PRODUCTS_LIST_REQUEST,
      })

      const config = {
          headers: {
              'content-type': 'application/json'
          },
      }
      const {data}  = await axios.get(`${BASE_URL}list/`,config )
      console.log(data)
          dispatch({ 
              type:  PRODUCTS_LIST_SUCCESS,
              payload: data.data,
          })
          
  }catch(e) {

          dispatch({
              type: PRODUCTS_LIST_FAIL,
              payload: e.response && e.response.data.message ? e.response.data.message : e.message
          })

  }
}

