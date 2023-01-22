import React, {useState} from "react";
import styled from "styled-components";
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";

export const notifyError = (message, closeFunction) => toast.error(
            message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: typeof closeFunction === "function" && closeFunction(),
        })

export const notifySuccess = (message, closeFunction) => toast.success(
            message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: typeof closeFunction === "function" && closeFunction(),
        })

const createList = (listName) =>{
    return new Promise((resolve, reject)=>{
        const sessionLists = Object.keys(sessionStorage);
        try {
            if(!sessionLists.some(item=>item === listName)){
                sessionStorage.setItem(`${listName}`, JSON.stringify([]))
                resolve("Lista creada con éxito !")
            }else{
                reject("La lista ya existe")
            }
        } catch (error) {
            return error
        }
    })
}

export default function NewList() {
    const [listName, setListName] = useState('');
    
    const handleForm = (e) =>{
        e.preventDefault();
        
        createList(listName)
            .then(result=>{
                notifySuccess(result);
                setTimeout(() => {
                    window.location.assign(`/list/${listName}`)
                }, 3000);
            })
            .catch(error=>notifyError(error))
    };

  return (
    <Wrapper>
        <form onSubmit={(e)=>handleForm(e)}>
            <div className="form-group">
                <label htmlFor="listName">Nombre de la lista</label>
                <input 
                    type={"text"} 
                    id="listName" 
                    name="listName" 
                    placeholder="Mi lista..." 
                    onChange={(e)=>setListName(e.target.value)}
                    required
                />
                <button type="submit">Crear</button>
            </div>
        </form>
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
        <Navbar/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width: 100%;
    height: 100%;

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .form-group{
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: center;
        width: 50%;

        button{
            border: 1px solid var(--c-glow);
            background-color: transparent;
            padding: 12px;
            color: var(--c-white);
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            width: 50%;
            margin: auto;
            margin-top: 2rem;
        }

        button:focus{
            background-color: var(--c-glow);
            color: var(--c-black);
        }
    }
`