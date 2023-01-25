import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

import useWindowDimensions from '../utils/useWindowDimensions'

export default function Layout() {
  const {height} = useWindowDimensions();

  return (
    <div style={{minHeight: height, display: 'flex', flexDirection: "column"}}>
        <Outlet/>
        <Navbar/>
    </div>
  )
}
