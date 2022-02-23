import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer from "./currencies/currenciesReducer";

export const store = configureStore({
    reducer: {
        currencies: currenciesReducer
    }
})