import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import '../../pages/sign-in/signin.jsx'
import '../sign-in/signin.css'
import HomePage from '../home/home.tsx';



const api = axios.create({
  baseURL: 'http://localhost:3001',
});

function SigninPage () {
  const [user, setUser] = useState ('');
  const [email, setNewEmail] = useState('');
  const [senha, setNewSenha] = useState('');

  useEffect(() => {
    api.get('/').then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);

  function login() {
    api
      .post('/login', {
        email,
        senha,
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
        <div className='educakids'><h1><span className="dtc1" >E</span>duca<span className="dtc2" >A</span>ção<span className="dtc3" >K</span>ids</h1></div>
       
        <form>
        <div className="mail-cad">
            <label>Email</label>
          </div>
          <input
            className="input-mail"
            type="email"
            placeholder="seu@email.com"
            onChange={(event) => setNewEmail(event.target.value)}
          />
          <div className="pass-cad">
            <label>Senha</label>
          </div>
          <input
            className="password"
            type="password"
            placeholder="Digite sua senha"
            onChange={(event) => setNewSenha(event.target.value)}
          />
        </form>
        <button onClick={() => login()}>Entrar</button>
        
      </div>
    );
    
  }

  


export default SigninPage;



