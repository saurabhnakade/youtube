import React from "react";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux"
import store from "./utils/store";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";
import FullPage from "./components/FullPage";

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<FullPage/>,
    children:[
      {
        path:"/",
        element:<Body/>,
        children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"/watch",
          element:<WatchPage/>
        },
        {
          path:"/results",
          element:<SearchResultPage/>
        }
      ]
    }
  ]
  }
]);

const App = () => {
    return (
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    );
 
    // {
    //    * Head
    //    * Body
    //    *    Sidebar
    //    *      MenuItems
    //    *    MainContainer
    //    *      ButtonList
    //    *      VideoContainer
    //    *        VideoCard
    // }
};

export default App;

