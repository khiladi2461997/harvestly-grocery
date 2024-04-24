import { configureStore } from "@reduxjs/toolkit";
import checkoutSlice from "./reducers/cartSlice";
import authReducer from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: checkoutSlice,
  },
});

export default store;