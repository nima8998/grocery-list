import React from 'react'

import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'

const viewSteps = [
  {
    id: 1,
    element: <FirstStep/>
  },
  {
    id: 2,
    element: <SecondStep/>
  },
  {
    id: 3,
    element: <ThirdStep/>
  },
  {
    id: 4,
    element: <FourthStep/>
  },
]

export default function TutorialContainer({currentStep}) {
  return (
    <div>
      {
        viewSteps.find(({id})=>id===currentStep).element
      }
    </div>
  )
}
