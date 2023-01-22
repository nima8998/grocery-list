import React from 'react';

import Home from './components/Home';
import Error from './components/Error';
import NewList from './components/NewList';
import ListDetail from './components/ListDetail';
import MyLists from './components/MyLists.js';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/new-list",
        element: <NewList/>
    },
    {
        path: "/list/:listName",
        element: <ListDetail/>
    },
    {
        path: "/mis-listas",
        element: <MyLists/>
    },
    {
        path: "*",
        element: <Error/>
    },
])


function App() {
  return (
    <RouterProvider router={router}/>    
  );
}

export default App;
