import style from './styles/pokemonList.module.css';
import PokemonItem from './PokemonItem';

const PokemonList = props => {
    const{pokemons, pokemonDescription} = props;

    const allPokemons = pokemons.map((pokemon) =>
        <PokemonItem key = {pokemon.url} {...pokemon} pokemonDescription = {pokemonDescription}/>
   );

   return (
        <div className={style.listBlock}>
            <h1 className={style.headline}>Choose a pokemon!</h1>
            <div className={style.allPokemons}>
                {allPokemons}
            </div>
        </div>
   )
}

export default PokemonList;
