// Action types
export const SET_WAREHOUSES = 'SET_WAREHOUSES';

// Action creators
export const setWarehouses = (warehouses) => ({
  type: SET_WAREHOUSES,
  payload: warehouses,
});

// Add more actions as needed

export const EDIT_WAREHOUSE = 'EDIT_WAREHOUSE';

// Action Creators
export const editWarehouse = (id, updatedFields) => ({
  type: EDIT_WAREHOUSE,
  payload: {
    id,
    updatedFields,
  },
});

export const initializeWarehouses = () => async (dispatch) => {
    try {
      const response = await fetch('warehouses.json');
      const data = await response.json();
      dispatch(setWarehouses(data)); // Dispatch the action to store data
    } catch (error) {
      console.error('Error fetching warehouse data:', error);
    }
  };
