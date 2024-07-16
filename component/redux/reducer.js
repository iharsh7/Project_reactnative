import { ADD_TO_CART } from "./Constant";
import { REMOVE_CART } from "./Constant";
const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];
    case REMOVE_CART:
     return state.filter((ele)=>{
        return(
          ele.id!=action.data.id
        )
      })
      // console.log(state)
      // console.log(state.id)
      // // console.log("ITEM")
      // // console.log(item.id)
      // console.log("ACTION")
    default:
      return state;
  }
};
