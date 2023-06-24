import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux"
import store from "./utils/store";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";
import FullPage from "./components/FullPage";
import LiveChatPage from "./components/LiveChatPage";
import Test from "./components/Test";

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
        },
        {
          path:"/live",
          element:<LiveChatPage/>
        },
        {
          path:"/test",
          element:<Test/>
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

