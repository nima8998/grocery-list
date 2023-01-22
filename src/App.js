import React from 'react';

import Home from './components/Home';
import Error from './components/Error';
import NewList from './components/NewList';
import ListDetail from './components/ListDetail';
import MyLists from './components/MyLists.js';
import Layout from './layout/Layout';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"


const router = [
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
]


function App() {
  return (
    // <RouterProvider router={router}/>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                {
                    router.map(({path, element}, key)=>(
                        <Route 
                        key={key}
                        path={path}
                        element={element}
                        />
                    ))
                }
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
