import './App.css';
import { useState,useEffect } from 'react';

const MONGO_URL = "http://localhost:8080/project/api/v1/user";
const SQL_URL = "http://localhost:8081/usuarios";

export default function App(){
  const [users, setUser] = useState([]);
  const [form, setForm] = useState({id: "", name: "", phone: ""});
  const [edit, setEditon] = useState(null);

  useEffect(() => {
    fetch(MONGO_URL, {
        headers: {
          'Content-Type': 'application/json',
          // Outros headers necessários
        }
      })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        // Trate o erro adequadamente (ex: mostrar mensagem para o usuário)
      });
  }, []);  

  
  const handleSend = async () => {
    const newUser = form;
    const method = "POST";

    const response = await fetch(MONGO_URL, {
      method,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUser),
    });

    if(response.ok){
      setUser(
        [...users, newUser]
      );
      //setEdition(null);
      setForm({id: "", name: "", phone: ""});
    }
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditon(user.id);
  };

  const handleDelete = async (id) => {
    
    const response = await fetch(`${MONGO_URL}/${id}`, {method : "DELETE"});

    if(response.ok){
      setUser(users.filter(u => u.id !== id));
    }
    
  };

  return (
    <div className='bg-dark'>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
      
      <div className="container-fluid p-5">
        <p className='h1 text-center text-white'>
          Formulário
        </p>

        <div className='container mt-3'>
          <div className="form-floating mb-3 mt-3">
            <input className="form-control" placeholder='Id' value={ form.id } onChange={ (e) => setForm( { ...form, id: e.target.value } ) }/><br/>
            <label>Id</label>
          </div>

          <div className="form-floating mb-3 mt-3">
            <input className="form-control" placeholder='Nome' value={ form.name } onChange={ (e) => setForm( { ...form, name: e.target.value } ) }/><br/>
            <label>Nome</label>
          </div>

          <div className="form-floating mb-3 mt-3">
            <input className="form-control" placeholder='Telefone' value={ form.phone } onChange={ (e) => setForm( { ...form, phone: e.target.value } ) }/><br/>
            <label>Telefone</label>
          </div>

          <button type="button" className="btn btn-primary" onClick={handleSend}>
            Adicionar
          </button>
        </div>

        {/** TODO - Inserir uma Tabela para confirmar ao usuário que os dados estão sendo inseridos */}
      </div>

      <div className='bg-dark'>
        <h1 className='text-white text-center'>Lista de Alunos</h1>
        <table className="table table-dark table-borderless">
          <thead>
            <tr className='text-white text-center'>
              <th>ID</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(
                (user, id) => (
                  <tr key={id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>
                      <div className="btn-group btn-group-lg">
                        <button className="btn btn-success" onClick={() => handleEdit(user)}>🖋️</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>❌</button>
                      </div>
                    </td>
                  </tr>
                )
             )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
