
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login/login.tsx';
import RegisterPage from '../pages/register/register.tsx';
import HomePage from '../pages/home/home.tsx';
import SigninPage from '../pages/sign-in/signin.jsx';

function App(){
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element= {<LoginPage/>}/>
      <Route path='/register' element= {<RegisterPage/>}/>
      <Route path='/home' element= {<HomePage/>}/>
      <Route path='/logar' element= {<SigninPage/>}/>
      
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;




