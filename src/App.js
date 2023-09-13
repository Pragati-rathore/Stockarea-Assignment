import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/warehousereducer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch to dispatch actions
import { setWarehouses } from "./actions/warehouseaction";
import WarehouseList from "./components/warehouselist";
import WarehouseDetailEdit from "./components/warehousedetailsedit";


const store = createStore(rootReducer);
function App() {

  
  return (
    <Provider store={store}>
      <BrowserRouter>
        
          <div className="App">
          <Routes>
            <Route exact path="/" element={<WarehouseList />} />
            <Route path="/edit/:id" element={<WarehouseDetailEdit />} />
            </Routes>
          </div>
        
      </BrowserRouter>
    </Provider>
  );
}

export default App;
