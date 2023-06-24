import {configureStore} from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import cacheSeachSlice from "./cacheSeachSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        nav:navSlice,
        cache:cacheSeachSlice,
        chat:chatSlice
    }
})

export default store;