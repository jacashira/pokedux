import {Col} from 'antd'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemon } from './api';
import { setPokemons, setPokemons as SetPokemonsActions } from './actions';
import logo from './statics/logo.svg';
import './App.css';

function App( { pokemons,setPokemons }) {

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon()
      setPokemons(pokemonsRes)
    }

    fetchPokemon()
  },[])


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

const mapStateToProps =  (state) => ({
  pokemons:state.pokemons,
})

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(SetPokemonsActions(value)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App) ;
