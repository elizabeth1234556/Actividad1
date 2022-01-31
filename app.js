let pokemon={}
function  handleSearch(){
  const searchPokemon = document.getElementById("searchInput").value;
 // console.log(searchPokemon)
 fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
 .then((res)=> res.json())
 .then(res =>{
     pokemon.nombre=res.name
     pokemon.tipos=res.types.length    
     pokemon.movimiento = res.moves.map(moviento => moviento.move.name);
     pokemon.game_indices = res.game_indices.map(indice => indice.version.name);
     pokemon.art=res.sprites.front_default
 })
console.log(pokemon)
}

