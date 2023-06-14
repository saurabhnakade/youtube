import {configureStore} from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cacheSeachSlice from "./cacheSeachSlice";

const store=configureStore({
    reducer:{
        nav:navSlice,
        cache:cacheSeachSlice
    }
})

export default store;