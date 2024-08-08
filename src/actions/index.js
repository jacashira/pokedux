import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})

export const getPokemonsWithDetails = 
    (pokemons = []) => 
    async (dispatch) => {
        console.log(pokemons);
        const pokemonDetailed = await Promise.all(pokemons.map((pokemon) => getPokemonDetails(pokemon)))

        dispatch(setPokemons(pokemonDetailed))
}