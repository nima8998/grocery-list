import React, {useState} from "react";
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../components/Navbar";
import { notifyError } from "../utils/notifyError";


export default function NewList() {
    const sessionLists = Object.keys(sessionStorage);
    const [listName, setListName] = useState('');
    
    const handleForm = (e) =>{
        e.preventDefault();
        
        if(!sessionLists.some(item=>item === listName)){
            sessionStorage.setItem(`${listName}`, JSON.stringify([]))
            window.location.assign(`/lista/${listName}`)
        }else{
            notifyError("La lista ya existe");
        }
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
                <button type="submit" className="CTA">Crear</button>
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

        label{
            font-size: .9rem;
        }
        
        button:focus{
            background-color: var(--c-glow);
            color: var(--c-black);
        }
    }
`