import React from 'react'
import styled from 'styled-components'
import CrearImg from "../assets/crear.png"

export default function FirstStep() {
  return (
    <Wrapper>
        <p>En la opción:</p> 
        <img src={CrearImg} />
        <p>Podras crear tu lista con el nombre que desees..</p>
        <i style={{paddingTop: "15px"}}>
            Las listas creadas, existen hasta que cierres la aplicación. <br/>
            Si permanece minimiazada, podrás volver a verlas, editarlas o eliminarlas las veces que quieras.
        </i>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    width: 90%;
    margin: 0 auto;
`