import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// pages
import Home from './Home'
import Detail from './Detail';
import List from './List';
import Search from './Search';
import SearchAppBar from './SearchAppBar';

// apollo
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// material-ui


// apollo client 
const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
});

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <section>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/detail' component={Detail}/>
                <Route path='/list' component={List}/>
                <Route path='/search' component={Search}/>
              </Switch>
          </ BrowserRouter>
        </ApolloProvider>
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
