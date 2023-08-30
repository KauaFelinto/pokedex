const pokemonList = document.getElementById('pokemonList')
const Load = document.getElementById('Load')
const maxPoke = 150
const limit = 10
let offset = 0;


function loadPoke(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemon = []) => {
        pokemonList.innerHTML += pokemon.map((pokemon) => `<li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
    
        <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
    
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        </li>`
        ).join('')
    })
}

loadPoke(offset, limit)

Load.addEventListener('click', () => {
    offset += limit
    
    const qdtPoke = offset + limit

    if (qdtPoke >= maxPoke) {
        const newLimit = qdtPoke - maxPoke
        loadPoke(offset, limit)
        Load.parentElement.removeChild(Load)
    } else {
        loadPoke(offset, limit)
    }
})