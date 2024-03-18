import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import '../../pages/login/login.css'
import HomePage from '../home/home.tsx';
const api = axios.create({
  baseURL: 'http://localhost:3001',
});
function LoginPage() {
  const [users, setUsers] = useState([]);
  const [name, setNewUser] = useState('');
  const [email, setNewEmail] = useState('');
  const [senha, setNewSenha] = useState('');
  const [senhafc, setNewSenhafc] = useState('');
  useEffect(() => {
    api.get('/').then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  function newUser() {
    api
      .post('/register', {
        name,
        email,
        senha,
        senhafc,
      })
      .then((response) => {
        console.log(response);
      });
  }
  return (
    
    <div className="App">
     <div className="imgcad">
          <img src="images/logoedu.png" alt="logotipo" />
        </div>
      <form id="form" className ="form">        
      <div className='educakids'><h1><span className="dtc1" >E</span>duca<span className="dtc2" >A</span>ção<span className="dtc3" >K</span>ids</h1></div>       
        <div className="registration-form">
          <div className="name-cad">
            <label>NOME</label>
          </div>
          <input
            className="input-name"
            type="text"
            placeholder="Insira seu nome"
            onChange={(event) => setNewUser(event.target.value)}
          />
          <div className="mail-cad">
            <label>EMAIL</label>
          </div>
          <input
            className="input-mail"
            type="email"
            placeholder="seu@email.com"
            onChange={(event) => setNewEmail(event.target.value)}
          />
          <div className="pass-cad">
            <label>SENHA</label>
          </div>
          <input
            className="password"
            type="password"
            placeholder="Digite sua senha"
            onChange={(event) => setNewSenha(event.target.value)}
          />
          <div className="conf-cad">
            <label>CONFIRMAR</label>
          </div>
          <input
            className="confirm"
            type="password"
            placeholder="Confirmar Senha"
            onChange={(event) => setNewSenhafc(event.target.value)}
          />
          <Link to="/register" onClick={ () => newUser() }>CADASTRAR
          </Link>
          <div>
            
          </div>
        </div>
        
      </form>
      
      {/* */}
    </div>
    
  );
  
}
export default LoginPage;
<script src='../pages/login/login.js'></script>
