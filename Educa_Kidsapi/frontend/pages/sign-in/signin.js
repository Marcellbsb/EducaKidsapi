import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../sign-in/signin.css';


const api = axios.create({
  baseURL: 'http://localhost:3001',
});

function SigninPage() {
  const [email, setNewEmail] = useState('');
  const [senha, setNewSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/home');
    }
  }, []);

  function login() {
    api
      .post('/login', {
        email,
        senha,
      })
      .then((response) => {
        console.log(response);
        if (!response.data.success) {
          // Exibir mensagem de erro de login
          alert('Credenciais inválidas!');
          return;
        }
        // Login bem-sucedido
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate(''); // Navegue para a página inicial após o login
      });
  }

  return (
    <div className="App">
      <div className="imgcad">
        <img src="images/logoedu.png" alt="logotipo" />
      </div>
      <div className="educakids">
        <h1>
          <span className="dtc1">E</span>duca
          <span className="dtc2">A</span>ção
          <span className="dtc3">K</span>ids
        </h1>
      </div>

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

export default SigninPage;
