import React, { Component } from 'react';
import './App.css'
// import { useQuery, Query} from '@apollo/react-hooks';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

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
  // const classes = useStyles();

 return (
    <div className="App">
        <section>
        <Paper 
        // className={classes.root}
        >
          <Query query={POKEMON_DETAIL}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            console.log(data)
            return (
              <>
                <div>
                  <Typography variant="h4" component="h2">
                    {data.pokemon.name}
                  </Typography>
                  <Typography component="p">
                  numero desse pokemon: {data.pokemon.number}
                  </Typography>
                </div>
                <div>
                  <img src={data.pokemon.image} alt=""/>
                </div>
              </>
            );
          }}
          </Query>
          </Paper>
        </section>
    </div>
 );
 }
}export default Detail;