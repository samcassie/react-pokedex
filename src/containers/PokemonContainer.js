import React from 'react';
import PokemonSelector from '../components/PokemonSelector.js';
import PokemonDetail from '../components/PokemonDetail.js';

class PokemonContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
            selectedPokemonData: null
        };
        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    }

    componentDidMount(){
        const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

        fetch(url)
        .then(res => res.json())
        .then(pokemons => this.setState({pokemons: pokemons.results}))
        .catch(err => console.error)
    }




    handlePokemonSelected(url){

        fetch(url)
        .then(res => res.json())
        .then(pokemon => this.setState({selectedPokemonData: pokemon}))
        .catch(err => console.error)
    }

    render(){
        const selectedPokemon = this.state.pokemons.find(pokemon =>
        this.state.selectedPokemonURL === pokemon.url)

        return (
            <div class="main">
                <h2> Pokemon Container </h2>
                <PokemonSelector pokemons={this.state.pokemons} onPokemonSelected={this.handlePokemonSelected}/>
                <PokemonDetail pokemon={this.state.selectedPokemonData} />
            </div>

        )
    }


}

export default PokemonContainer;
