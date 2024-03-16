import React from "react";
import '../../pages/home/home.css'

function HomePage (){
    return (
  <div className="App">
    <div className="values"> <h3>APOIANDO O FUTURO DO NOSSO BRASIL ATRAVÉS DA EDUCAÇÃO E INCLUSÃO SOCIAL</h3></div>
     <div className="educakids"><h1><span className="dtc1" >E</span>duca<span className="dtc2">A</span>ção<span className="dtc3"> K</span>ids</h1></div>
  <nav className="menu-container">
    <a href="#" >HOME</a>
    <a href="#" >QUEM SOMOS</a>
    <a href="#" >ÁREA RESTRITA</a>
    <a href="#" >UNIDADES PARCEIRAS</a>
       
</nav>
  <div className="img" ><img src="images/logo.png" alt="" /></div>
  
  <div className="img-banner" ><img src="images/educakids.png" alt="" /></div>
  
    
    </div>
    

    )  
}

export default  HomePage;