import { EDIT_WAREHOUSE } from '../actions/warehouseaction';

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_WAREHOUSE:
      const { id, updatedFields } = action.payload;
      // Find the warehouse with the given id and update its fields
      return {
        ...state,
        warehouses: state.warehouses.map((warehouse) =>
          warehouse.id === id ? { ...warehouse, ...updatedFields } : warehouse
        ),
      };
    // Add more case statements for other actions if needed
    default:
      return state;
  }
};

export default warehouseReducer;