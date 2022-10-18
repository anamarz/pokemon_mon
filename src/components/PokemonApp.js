import style from './styles/pokemonApp.module.css';
import React from 'react';
import PokemonList from './PokemonList';
import PokemonDescription from './PokemonDescription';
import axios from 'axios';



class PokemonApp extends React.Component{
  state = {
    pokemons: null,
    descriptionPokemon: null,
    pokemonId: null,
    previousUrl: null,
    nextUrl: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
  };

  componentDidMount() {
    axios.get(`${this.state.nextUrl}`)
      .then((responce) => {
        const pokemons = responce.data.results;
        const nextUrl =  responce.data.next;
        console.log(pokemons);
        this.setState({ pokemons, nextUrl })
      });
  };

  pokemonDescription = (pokemonUrl) => {
    const pokemonId = this.state.pokemons.filter((pokemon) => {
      if (pokemon.url === pokemonUrl) {
        return pokemon;
      }
      return null;
    });
      this.setState({ pokemonId: pokemonId[0].url });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.pokemonId !== prevState.pokemonId) {
      this.fetchData(this.state.pokemonId)
    }
  }

  fetchData = (id) => {
    axios.get(`${id}`).then((response) => {
      const descriptionPokemon = {
        name: response.data.name,
        sprites: response.data.sprites,
      };
      this.setState({ descriptionPokemon });
    })
  }

  render() { 
    const {pokemons, descriptionPokemon} = this.state;

    if(!pokemons) {
      return <div>Loading...</div>
    }

    return(
      <div className={style.app}>
        
        <div className={style.mainBlock}> 
         
          <PokemonList
            pokemons = {pokemons}
            pokemonDescription = {this.pokemonDescription}
          />
          </div>
          {descriptionPokemon && (
            <PokemonDescription descriptionPokemon = {descriptionPokemon}/>
          )}
          </div>
    )
  }


}


export default PokemonApp;
