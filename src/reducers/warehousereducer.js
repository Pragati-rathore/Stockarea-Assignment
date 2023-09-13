
import { SET_WAREHOUSES } from '../actions/warehouseaction';

const initialState = {
  warehouses: [],
  // Add more initial state properties as needed
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAREHOUSES:
      return {
        ...state,
        warehouses: action.payload,
      };
    // Add more reducer cases as needed
    default:
      return state;
  }
};

export default rootReducer;


