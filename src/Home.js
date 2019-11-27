import React, { Component } from 'react';
import logo from './pokemon_logo.png';
import './App.css'


class Home extends Component {
 render(){
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
       <section>
         <div>
           <p>Bem Vindo</p>
         </div>
       </section>
       
    </div>
 );
 }
}export default Home;