import React from 'react'
import styled from 'styled-components'
import CrearImg from "../assets/mislistas.png"
import GuardarImg from "../assets/guardar.png"

export default function FirstStep() {
  return (
    <Wrapper>
        <p>En la opción:</p> 
        <img src={CrearImg} />
        <p>Podes ver tus listas creadas, entrar al detalle de cada una de ellas y editarlas a tu gusto.</p>
        <i style={{paddingTop: "15px"}}>
          Una vez la hayas completado, <b>deberas guardarla.</b>
        </i>
        <img src={GuardarImg} />
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