const app = Vue.createApp( {

    data() {
        return {
        allPokemon: [
            { "id":1, "name":"bulbasaur", "type":"grass" },
            { "id":2, "name":"ivysaur", "type":"grass" }],
        partyPokemon: [{ "id":2, "name":"ivysaur", "type":"grass" }],
        filteredPokemon: [],
        maxPartySize: 6
        };
    },
    methods: {
        loadPokemon() {
            //load all pokemon from API and save into all pokemon
        },
        filterPokemon() {
            //set filteredPokemon to matching pokemon based on search query
        },
        addPokemonToParty(pokemon) {

        },
        removePokemonFromParty(pokemon) {

        },
        pokemonTypeString(pokemon) {
            if(pokemon.types.length > 1) {
                return `${pokemon.types}`;
            }
        }
    }
}).mount("#app");