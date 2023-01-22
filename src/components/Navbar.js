import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const routes = [
    {
        name: "Inicio",
        path: "/",
    },
    {
        name: "Crear",
        path: "/new-list",
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
    </Wrapper>
  )
}

const Wrapper = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    height: 50px;
    bottom: 0;
    left: 0;
    width: 100%;
    font-weight: bolder;
    color: var(--c-white);
    background-color: var(--c-glow);
    padding: 0 15px;    
    
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        width: 100%;       
        a{
            text-decoration: none;
        }
    }
`