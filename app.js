const getPokemon = async function (id) {
    // get pokemon data from pokeapi
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data;
    //createPokemonCard( data );
  };

  const colors = {
    fire: '#fd7d24',
    grass: '#9bcc50',
    electric: '#eed535',
    water: '#4592c4',
    ground: '#ab9842',
    rock: '#a38c21',
    fairy: '#fdb9e9',
    poison: '#b97fc9',
    bug: '#729f3f',
    dragon: '#53a4cf',
    psychic: '#f366b9',
    flying: '#3dc7ef',
    fighting: '#d56723',
    normal: '#a4acaf',
    ice: '#51c4e7',
    ghost: '#7b62a3',
    dark: '#707070',
    steel: '#9eb7b8'
};
  

const app = Vue.createApp({
  data() {
    return {
      allPokemon: [
      ],
      partyPokemon: [],
      filteredPokemon: [],
      maxPartySize: 6,
      value: '',
      partyNumber: 0
    };
  },
  methods: {
    async loadPokemon() {
      // load all pokemon from API and save into all pokemon
      const pokemon_count = 200;
      let pokemon = [];
      for (let i = 1; i <= pokemon_count; i++) {
        let p = await getPokemon(i);

      if (p.name === "mr-mime"){
          p.uppername = "Mr. Mime";
      }
      if(p.name === "nidoran-f"){
          p.uppername = "Nidoran (F)";
      }
      if(p.name === "nidoran-m"){
          p.uppername = "Nidoran (M)";
      }
      if(p.name === "farfetchd"){
          p.uppername = "Farfetch'd";
      }
      if(p.name === "ho-oh"){
          p.uppername = "Ho-Oh";
      }
if(p.name === "deoxys-normal"){
          p.uppername = "Deoxys";
      }
      if(p.name === "wormadam-plant"){
          p.uppername = "Wormadam";
      }
      if(p.name === "mime-jr"){
          p.uppername = "Mime Jr.";
      }
      if(p.name === "porygon-z"){
          p.uppername = "Porygon-Z";
      }
      if(p.name === "giratina-altered"){
          p.uppername = "Giratina";
      }
      if(p.name === "shaymin-land"){
          p.uppername = "Shaymin";
      }
if(p.name === "basculin-red-striped"){
          p.uppername = "Basculin";
      }
      if(p.name === "darmanitan-standard"){
          p.uppername = "Darmanitan";
      }
      if(p.name === "tornadus-incarnate"){
          p.uppername = "Tornadus";
      }
      if(p.name === "thundurus-incarnate"){
          p.uppername = "Thundurus";
      }
      if(p.name === "landorus-incarnate"){
          p.uppername = "Landorus";
      }
      if(p.name === "keldeo-ordinary"){
          p.uppername = "Keldeo";
      }
      if(p.name === "meloetta-aria"){
          p.uppername = "Meloetta";
      }
      if(p.name === "meowstic-male"){
          p.uppername = "Meowstic";
      }
      if(p.name === "aegislash-shield"){
          p.uppername = "Aegislash";
      }
      if(p.name === "pumpkaboo-average"){
          p.uppername = "Pumpkaboo";
      }
      if(p.name === "gourgeist-average"){
          p.uppername = "Gourgeist";
      }
      if(p.name === "oricorio-baile"){
          p.uppername = "Oricorio";
      }
      if(p.name === "lycanroc-midday"){
          p.uppername = "Lycanroc";
      }
      if(p.name === "wishiwashi-solo"){
          p.uppername = "Wishiwashi";
      }
      if(p.name === "type-null"){
          p.uppername = "Type: Null";
      }
      if(p.name === "minior-red-meteor"){
          p.uppername = "Minior";
      }
      if(p.name === "mimikyu-disguised"){
          p.uppername = "Mimikyu";
      }
if(p.name === "tapu-koko"){
          p.uppername = "Tapu Koko";
      }
      if(p.name === "tapu-lele"){
          p.uppername = "Tapu Lele";
      }
      if(p.name === "tapu-bulu"){
          p.uppername = "Tapu Bulu";
      }
      if(p.name === "tapu-fini"){
          p.uppername = "Tapu Fini";
      }
      if(p.name === "toxtricity-amped"){
          p.uppername = "Toxtricity";
      }
      if(p.name === "sirfetchd"){
          p.uppername = "Sirfetch'd";
      }
      if(p.name === "mr-rime"){
          p.uppername = "Mr. Rime";
      }
      if(p.name === "eiscue-ice"){
          p.uppername = "Eiscue";
      }
      if(p.name === "indeedee-male"){
          p.uppername = "Indeedee";
      }
      if(p.name === "zacian-hero"){
          p.uppername = "Zacian";
      }
      if(p.name === "zamazenta-hero"){
          p.uppername = "Zamazenta";
      }
      if(p.name === "urshifu-single-strike"){
          p.uppername = "Urshifu";
      }

      p.uppername = p.name[0].toUpperCase() + p.name.slice(1);
      p.type1 = this.pokemonTypeString(p);
      p.isShiny = false;
        p.isFavorite = false;
        

        pokemon.push(p);
      }

      pokemon.forEach( p => {
          this.allPokemon.push(p);
      });
    },
    getGradient(pokemon) {
        const type1 = pokemon.types[0].type.name
        pokemon.color1 = colors[type1];
        if (pokemon.types.length > 1) {
            const type2 = pokemon.types[1].type.name
    pokemon.color2 = colors[type2];
        }
        else {
            pokemon.color2 = colors[type1];
        }
        return "linear-gradient(to right bottom," + pokemon.color1 + ", " + pokemon.color2 + ")";
    },
    filterPokemon(value) {

        this.filteredPokemon = [];
      // set filteredPokemon to matching pokemon based on search query
      this.allPokemon.forEach( p => {
          console.log(value);
          console.log(p.name);
          if (p.types.length > 1) {
            if (p.types[1].type.name == value) {
                const pokemonCopy = {...p};
          pokemonCopy.guid = this.getGUID();
          console.log(p.name);
          console.log(pokemonCopy.guid);
          this.filteredPokemon.push(  pokemonCopy );
            };}
        if (p.id.toString().includes(value.toString())) {
            const pokemonCopy = {...p};
          pokemonCopy.guid = this.getGUID();
          console.log(p.name);
          console.log(pokemonCopy.guid);
          this.filteredPokemon.push(  pokemonCopy );
        } 
        else if (p.name.includes(value.toString().toLowerCase()) || p.types[0].type.name.includes(value.toString().toLowerCase())) {
            const pokemonCopy = {...p};
          pokemonCopy.guid = this.getGUID();
          console.log(p.name);
          console.log(pokemonCopy.guid);
          this.filteredPokemon.push(  pokemonCopy );
          }
      });
    },
    clearFilteredPokemon() {
        this.filteredPokemon = [];
    },
    addPokemonToParty(pokemon) 
    {
      if (this.partyPokemon.length == 6) {
        alert("You can only add 6 Pokemon to your party.")
      }
      else {
          if (this.partyPokemon.length > 0) {
              var same = "false";
            this.partyPokemon.forEach( p => {
                if (p.name == pokemon.name) {
                  alert("You can't add a Pokemon to your party that is already in your party.")
                  same = "true";
                }
        
            })
            if(same == "false"){
              const pokemonCopy = {...pokemon};
                  pokemonCopy.guid = this.getGUID();
                  console.log(pokemonCopy.guid);
                  this.partyPokemon.push(  pokemonCopy );
                  this.partyNumber++;}
          }
          else {
            const pokemonCopy = {...pokemon};
            pokemonCopy.guid = this.getGUID();
            console.log(pokemonCopy.guid);
            this.partyPokemon.push(  pokemonCopy );
            this.partyNumber++;
          }
      }
    },
    removePokemonFromParty(pokemon) {
      this.partyNumber--;
      this.partyPokemon = this.partyPokemon
                            .filter( p => p.guid != pokemon.guid);
    },
    pokemonTypeString(pokemon) {
      if (pokemon.types.length > 1) {
        return `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`;
      } else {
        return `${pokemon.types[0].type.name}`;
      }
    },
    getGUID() {
      return Math.floor(Math.random()* 1000000);
    },
    enterPressed(e) {
        e.preventDefault();
        console.log(e)
    }
  },
  mounted() {
    this.loadPokemon();
  },
}).mount("#app");

