let pokeCard = document.querySelector('[data-poke-card]');
let pokeName = document.querySelector('[data-poke-name]');
let pokeImg = document.querySelector('[data-poke-img]');
let pokeImgContainer= document.querySelector('[data-poke-img-container]');
let pokeId = document.querySelector('[data-poke-id]');
let pokeTypes = document.querySelector('[data-poke-types]');
let pokeStats= document.querySelector('[data-poke-stats]');

let typeColors ={
    electric: '#FFEA70',
  
};

let searchPokemon = event =>{
    event.preventDefault();
    let {value} = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
}

let renderPokemonData = data =>{
    let sprite = data.sprites.front_default;
    let {stats, types} = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `# ${data.id}`;
    pokeTypes.textContent = data.types[0].type.name;
    pokeStats.textContent = data.moves[0].stats.name;
    setCardColor(types);

}




