import React, {useState} from 'react'
import styled from 'styled-components'

import firstStepIOS from "../assets/firstStepIOS.jpeg"
import secondStepIOS from "../assets/secondStepIOS.jpeg"
import thirdStepIOS from "../assets/thirdStepIOS.jpeg"

const ImageDataSource = [
  {
    id: 1,
    img: firstStepIOS
  },
  {
    id: 2,
    img: secondStepIOS
  },
  {
    id: 3,
    img: thirdStepIOS
  },
]

export default function FirstStep() {
  const [currentImg, setCurrentImg] = useState(1);
  const maxSteps = 3;

  const handleStep = (flow) =>{
    if(flow && currentImg < maxSteps){
        setCurrentImg(currentImg + 1);
    }else if(!flow && currentImg > 1){
        setCurrentImg(currentImg - 1);
    }
}
  return (
    <Wrapper>
        <h2>Podes instalarla en tu celular!</h2> 
        <p>En iOS:</p>
        <Carrousel>
          <p className='arrows' onClick={()=>handleStep(false)}>&lt;</p>
            <img src={ImageDataSource.find(({id})=>id === currentImg).img} alt="descriptive tutorial"/>
          <p className='arrows' onClick={()=>handleStep(true)}>&gt;</p>
        </Carrousel>
        <div>
          <p>
              1.- En la opción de "Compartir", en la parte inferior
          </p>
          <p>
              2.- Elegir la opción "Add to Home Screen" o "Agregar a inicio".
          </p>
          <p>
              3.- Elegir nombre y confirmar.
          </p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;    
    gap: 1rem;
    width: 90%;
    height: 100%;
    margin: 0 auto;

    p{
      font-size: .8rem;
    }


    h2{
      font-size: 1.5rem;
    }
`

const Carrousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 80%;
  min-height: 150px;

  img{
    object-fit: cover;
  }
`