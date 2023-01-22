import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

export default function MyLists() {
    const sessionLists = Object.keys(sessionStorage);
  return (
    <Wrapper>
        <h1>Mis listas:</h1>
        <List>
            <ul>
                {
                    sessionStorage?.length > 0 ?
                        sessionLists.map((item, key)=>(
                            <li key={key} className="item">
                            <Link to={`/list/${item}`}>{item}</Link>
                            </li>
                        )) : <li>No hay listas. <Link to={"/new-list"}>Crear una.</Link></li>
                }
            </ul>
        </List>
        <Navbar/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    padding: 2rem 0;
`

const List = styled.div`
    width: 100%;
    ul{
        padding-top: 35px;
        text-align: center;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        a{
            color: var(--c-white);
        }
    }

    .item{
        border: 1px solid var(--c-glow);
        width: 50%;
        padding: 5px;
        a{
            text-decoration: none;
        }
    }
`