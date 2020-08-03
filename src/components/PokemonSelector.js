import React from 'react';

const PokemonSelector = (props) => {

    const options = props.pokemons.map(pokemon => {

        return <option value={pokemon.url} key={pokemon.url}> {pokemon.name.toUpperCase()} </option>

    })

    function handleChange(event){
        props.onPokemonSelected(event.target.value)
    }

    return(
        <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default"> Choose a pokemon... </option>
            {options}
        </select>

    )


}

export default PokemonSelector;
