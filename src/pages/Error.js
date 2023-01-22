import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <Wrapper>
        <span className='nro'>Oops!</span>
        <p>Algo anduvo mal. Vuelve a intentarlo</p>
        <Link to={'/'}>Volver</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    text-align: center;

    .nro{
      font-size: 55px;
    }
    
    a{
      color: var(--c-white);
    }
`