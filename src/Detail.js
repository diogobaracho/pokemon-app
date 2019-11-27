import React, { Component } from 'react';
import './App.css'
// import { useQuery, Query} from '@apollo/react-hooks';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const POKEMON_DETAIL = gql`
{
  pokemon(name: "Pikachu") {
    id
    number
    image
    name
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
`;



class Detail extends Component {

 render(){

 return (
    <div className="App">
       <header className="App-header">
          <h1 className="App-title">Detalhes sobre o pokemon</h1>
       </header>
       <p className="App-intro">
            esse pokemon top

            <Query query={POKEMON_DETAIL}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return `Error! ${error.message}`;

              console.log(data)

              
              return (
                <>

                </>
                // <select name="dog" onChange={onDogSelected}>
                //   {data.dogs.map(dog => (
                //     <option key={dog.id} value={dog.breed}>
                //       {dog.breed}
                //     </option>
                //   ))}
                // </select>
              );
            }}

            </Query>
            
       </p>
    </div>
 );
 }
}export default Detail;