import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Debug from "./Debug"

const routes = [
    {
        name: "Inicio",
        path: "/",
    },
    {
        name: "Crear",
        path: "/nueva",
    },
    {
        name: "Mis listas",
        path: "/mis-listas",
    },
]

export default function Navbar() {
  return (
    <Wrapper>
        <ul>
        {
            routes.map(({name, path}, key)=>(
                <li key={key}>
                    <Link to={path}>{name}</Link>
                </li>
            ))
        }
        </ul>
        <Debug/>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    font-weight: bolder;
    color: var(--c-black);
    background-color: var(--c-glow);
    padding: 0 35px;
    
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        width: 100%;       
        a{
            color: var(--c-black);
            text-decoration: none;
        }
    }
`