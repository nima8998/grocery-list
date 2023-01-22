import React, {useState} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { notifySuccess } from "../utils/notifySuccess";
import { notifyError } from "../utils/notifyError";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

export default function ListDetail() {
    const {listName} = useParams();
    const currentList = JSON.parse(sessionStorage.getItem(listName))

    const [itemName, setItemName] = useState("")
    const [itemList, setItemList] = useState(currentList)

    
    const addItem = () =>{
        itemName !== "" ?
        setItemList((oldValues)=>[...oldValues, {name: itemName}]) : 
        notifyError("El nombre del articulo es requerido")
    }

    const removeItem = (itemToRemove) =>{
        setItemList((current)=>
            current.filter(item=>
                item.name !== itemToRemove
            )
        )
    }

    const saveList = () =>{
        sessionStorage.setItem(listName, JSON.stringify(itemList))
        notifySuccess("Lista guardada")
    }

    const deleteList = () =>{
        sessionStorage.removeItem(listName)
        window.location.assign("/mis-listas")
    }
    
  return (
    <Wrapper>
        <Title>Lista: <span className="listName">{listName}</span></Title>
        <ItemList>
            <div className="ItemList-body">
                {
                    itemList?.length > 0 &&
                    itemList.map(({name}, key)=>(
                        <div key={key} className="item">
                            <p>{name}</p>
                            <button onClick={()=>removeItem(name)} className="btnAction">✖</button>
                        </div>
                    ))
                }
            </div>
            <div className="ItemList-add">
                <input onChange={(e)=>setItemName(e.target.value)} type={"text"} placeholder={"Articulo..."} />
                <button onClick={()=>addItem()} className="btnAction">✔</button>
            </div>
            <div className="ItemList-footer">
                <button onClick={()=>deleteList()} className="CTA btnDelete">Eliminar lista</button>
                <button onClick={()=>saveList()} className="CTA">Guardar lista</button>
            </div>
        </ItemList>
        <Navbar/>
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </Wrapper>
  )
}


const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;
`
const Title = styled.h2`
    .listName{
        color: var(--c-glow);
    }
`


const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    height: 75%;
    width: 100%;
    padding-bottom: 5em;

    .item{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin: 10px 0;
        p{
            flex: 1;
        }
    }

    .ItemList-body{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 100%;
        overflow-y: auto;
        width: 75%;
        margin: auto;
        padding: 0 20px;
    }

    .ItemList-add{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 15px;
        margin: auto;
    }
    
    .ItemList-footer{
        display: flex;
        gap: 15px;

        .btnDelete{
            border-color: red;
        }
    }

    .btnAction{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: transparent;
        outline: none;
        border: 1px solid var(--c-glow);
        color: var(--c-white);
        font-weight: bolder;
    }
`