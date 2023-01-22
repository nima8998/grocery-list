import React, {useState} from 'react'
import styled from 'styled-components'
import TutorialContainer from '../components/TutorialContainer.js';

export default function Tutorial() {
    const [steps, setSteps] = useState(1);
    const maxSteps = 4;

    const handleStep = (flow) =>{
        if(flow && steps < maxSteps){
            setSteps(steps + 1);
        }else if(!flow && steps > 1){
            setSteps(steps - 1);
        }
    }

  return (
    <Wrapper>
        <TutorialContainer currentStep={steps}/>        
        <Buttons>
            <p onClick={()=>handleStep(false)} className='arrows'>&lt;</p>
            <span className='step'>{steps} / {maxSteps}</span>
            <p onClick={()=>handleStep(true)} className='arrows'>&gt;</p>
        </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto;
`