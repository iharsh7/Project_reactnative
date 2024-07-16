import { ADD_TO_CART } from "./Constant";
import { REMOVE_CART } from "./Constant";
export const addToCart = (item) => {
  console.log(item);
  return {
    type: ADD_TO_CART,
    data: item,
  };
};

export const removeFromCart = (item)=>{
  return{
    type: REMOVE_CART,
    data: item,
  }
}
