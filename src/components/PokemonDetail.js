import React from 'react';

const PokemonDetail = (props) => {
    if(!props.pokemon) return null;

    const pokemonTypes = props.pokemon.types.map(type => {

        return <h4> {type.type.name}</h4>

    })

    return (

        <div className="details">
            <img src={props.pokemon.sprites.front_default} className="image" alt="Poke Image" height="200"></img>
            <h4 className="data"> {props.pokemon.name} </h4>
            <div className="data">
            <h4> <span className="bold">Type: </span> </h4> <div className="type">{pokemonTypes}</div>
            </div>
            <h4 className="data"> <span className="bold">Pokedex Number: </span>{props.pokemon.id} </h4>
            <h4 className="data"> <span className="bold">Height:</span> {props.pokemon.height/10}m </h4>
            <h4 className="data"> <span className="bold">Weight: </span>{props.pokemon.height/10}kg </h4>





        </div>
    )


}

export default PokemonDetail;
