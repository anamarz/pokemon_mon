import style from './styles/pokemonDescription.module.css';

const PokemonDescription = (props) => {
    const { descriptionPokemon } = props;
    const { name, sprites } = descriptionPokemon;

    return(
        <div className={style.pokemonDescription}>
            <div className={style.container}>
                <h2 >Check out this pokemon:</h2>
                <h2 className={style.headline}>{name}</h2>
                <div className={style.imgContainer}>
                    <img src={`${sprites.front_default}`}/>
                    <img src={`${sprites.back_default}`}/>
                </div>
            </div>
        </div>
    )
}

export default PokemonDescription