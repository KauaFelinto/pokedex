const pokemonList = document.getElementById('pokemonList')
const Load = document.getElementById('Load')
const maxPoke = 151
const limit = 10
let offset = 0


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

        <button onclick="abrir()" id="detalhe" type="button">more</button>
        </li> 
        <div class="popup-poke" id="popup-poke">
        <div class="popup">
    <div onclick="fechar()" class="popup-close">x</div>
    <li class="pokemon ${pokemon.type}">
    <span class="name">${pokemon.name}</span>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
        <P>${pokemon.types.map((type) => `<li class="list ${type}">${type}</li>`).join('')}</li></p>
        <a href="#">${pokemon.name}</a>
    </div>
        </div>
	</div> `
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