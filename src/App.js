import React from 'react';
// import { render } from 'react-dom';

import logo from './pokemon_logo.png';
import './App.css';

import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <ApolloProvider client={client}>
          <div>
            <h2>Apollo Pokemon app</h2>
          </div>
        </ApolloProvider>
      </section>
    </div>
  );
}

export default App;
