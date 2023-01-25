import React, {useState} from 'react'

export default function Debug() {
  const {innerWidth, innerHeight, outerWidth, outerHeight} = window;
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  
  const openInfoDebug = () =>{
    setIsOpenPopup(!isOpenPopup);
  }
  return (
    <div style={{position:"absolute",color: "white", right: 50, bottom: 150, textAlign: "right"}} >
      <div style={{display: isOpenPopup ? "block" : "none", padding: "5px"}}>
        <p>innerWidth: {innerWidth}</p>
        <p>innerHeight: {innerHeight}</p>
        <p>outerWidth: {outerWidth}</p>
        <p>outerHeight: {outerHeight}</p>
      </div>
      <p onClick={()=>openInfoDebug()}>debug</p>
    </div>
  )
}