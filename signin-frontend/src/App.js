import './App.css';
import { useState,useEffect } from 'react';

const API_URL = "http://localhost:8081/project/api/v1/user"

export default function SignIn(){

  return (
    <div>
      <p>
        formulário
      </p>
      <div>
        <input/>
        <label>Id</label>

        <input/>
        <label>Nome</label>

        <input/>
        <label>Telefone</label>
      </div>
      <button>Enviar</button>
    </div>
  );
}
