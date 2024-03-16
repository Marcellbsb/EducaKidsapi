import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import '../../pages/register/register.js'
import './register.css'
import HomePage from '../home/home.tsx';



const api = axios.create({
  baseURL: 'http://localhost:3001',
});

function RegisterPage () {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNewNome] = useState('');
  const [cpf, setNewCpf] = useState('');
  const [email, setNewEmail] = useState('');
  const [serie, setNewSerie] = useState('');
  const [materia, setNewMateria] = useState('');

  useEffect(() => {
    api.get('/alunos').then((response) => {
      console.log(response.data);
      setAlunos(response.data);
    });
  }, []);

  function newStudent() {
    api
      .post('/alunos', {
        nome,
        cpf,
        email,
        serie,
        materia,
      })
      .then((response) => {
        console.log(response);
      });
  }


    return (
      
      <div className="App">
        
        <form>
        <div className="imgcad">
            <img src="images/logoedu.png" alt="logotipo" />
          </div>
          <div className='educakids'><h1><span className="dtc1" >E</span>duca<span className="dtc2" >A</span>ção<span className="dtc3" >K</span>ids</h1></div>
       
          <div className="registration-form">
            <div className="name-cad">
              <label>NOME</label>
            </div>
            <input
              className="input-name"
              type="text"
              placeholder="Insira seu nome"
              onChange={(event) => setNewNome(event.target.value)}
            />
            <div className="mail-cad">
              <label>CPF</label>
            </div>
            <input
              className="input-mail"
              type="email"
              placeholder="insira seu cpf"
              onChange={(event) => setNewCpf(event.target.value)}
            />
            <div className="pass-cad">
              <label>EMAIL</label>
            </div>
            <input
              className="password"
              type="text"
              placeholder="seu@email.com"
              onChange={(event) => setNewEmail(event.target.value)}
            />
            <div className="conf-cad">
              <label>SÉRIE</label>
            </div>
            <input
              className="confirm"
              type="text"
              placeholder="Série"
              onChange={(event) => setNewSerie(event.target.value)}
            />

             <div className="conf-cad">
              <label>MATÉRIA</label>
            </div>
            <input
              className="confirm"
              type="text"
              placeholder="Matéria de dificuldade"
              onChange={(event) => setNewMateria(event.target.value)}
            />

           
          </div>

        </form>
        <button onClick={() => newStudent()}>Enviar</button>
        {/* */}
      </div>
    );
    
  }

  


export default RegisterPage;



