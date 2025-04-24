import './App.css';
import { useState,useEffect } from 'react';

const MONGO_URL = "http://localhost:8081/project/api/v1/user";
const SQL_URL = "";

export default function SignIn(){
  const [users, setUser] = useState([]);
  const [form, setForm] = useState({id: "", name: "", phone: ""});
  const [edit, setEditon] = useState(null);

  
  useEffect(
    () => {
      fetch(MONGO_URL)
      .then((res) => res.json())
      .then((data) => setUser(data))
    }, []
  );
  

  {/** TODO - Add a way to send the PUT request for both APIs */}
  const handleSend = async () => {
    const newUser = form;
    const method = "POST";

    const response = await fetch(MONGO_URL, {
      method,
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newUser),
    });
    
    if(response.ok){
      setUser(
        
      );
      setEditon(null);
      setForm({
        id: "", 
        name: "", 
        phone: ""
      });
    }
  };
/*
  const handleEdit = (user) => {
    setForm(user);
    setEditon(user.id);
  };

  const handleDelete = async (id) => {
    
    const response = await fetch(`${MONGO_URL}/${id}`, {method : "DELETE"});

    if(response.ok){
      setUser(users.filter(u => u.id != id));
    }
    
  };
*/
  return (
    <div className='bg-dark'>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
      
      <div className="container-fluid p-5">
        <p className='h1 text-center text-white'>
          Formulário
        </p>

        <div className='container mt-3'>
          <div class="form-floating mb-3 mt-3">
            <input class="form-control" placeholder='Id' value={ form.id } onChange={ (e) => setForm( { ...form, id: e.target.value } ) }/><br/>
            <label>Id</label>
          </div>

          <div class="form-floating mb-3 mt-3">
            <input class="form-control" placeholder='Nome' value={ form.name } onChange={ (e) => setForm( { ...form, name: e.target.value } ) }/><br/>
            <label>Nome</label>
          </div>

          <div class="form-floating mb-3 mt-3">
            <input class="form-control" placeholder='Telefone' value={ form.phone } onChange={ (e) => setForm( { ...form, phone: e.target.value } ) }/><br/>
            <label>Telefone</label>
          </div>

          <button button type="button" class="btn btn-primary" onClick={handleSend}>
            Adicionar
          </button>
        </div>

        {/** TODO - Inserir uma Tabela para confirmar ao usuário que os dados estão sendo inseridos */}
      </div>
    </div>
  );
}
