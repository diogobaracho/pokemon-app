import React, { Component } from 'react';
import './App.css'


class Search extends Component {
 render(){
 return (
    <div className="App">
       <header className="App-header">
          
          <h1 className="App-title">Busca pokemon</h1>
       </header>
       <section>
         <div>
           <form >
             <input></input>
             <button>bucar</button>
           </form>
         </div>
       </section>
       
    </div>
 );
 }
}export default Search;