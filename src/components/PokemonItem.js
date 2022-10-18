import style from './styles/pokemonItem.module.css';

const PokemonItem = (props) => {
    const{ name, url, pokemonDescription} = props;

    return(
        <div className={style.pokemon}>
            
            <h4>{name}</h4>
            <button className={style.button}
            onClick={() => pokemonDescription(url)}>
            Learn more</button>
        </div>
    );
};

export default PokemonItem;