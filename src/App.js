import React from 'react';

import Home from './pages/Home';
import Error from './pages/Error';
import NewList from './pages/NewList';
import ListDetail from './pages/ListDetail';
import MyLists from './pages/MyLists.js';
import Tutorial from './pages/Tutorial.js';
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
        path: "/nueva",
        element: <NewList/>
    },
    {
        path: "/lista/:listName",
        element: <ListDetail/>
    },
    {
        path: "/mis-listas",
        element: <MyLists/>
    },
    {
        path: "/tutorial",
        element: <Tutorial/>
    },
    {
        path: "*",
        element: <Error/>
    },
]


function App() {
  return (
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
