// Função que converte Pokemon lista para Html
const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

// Regra da paginação
// offset
// Pagina 1, 2, 3, 4, 5            0 - 5
// Pagina 6, 7, 8, 9, 10           5 - 5
// Pagina 11                       10 - 5 (quando chegar remove o botão)

function loadPokemonItens(offset, limit) {
  function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
  
            <div class="detail">
              <ol class="types">
                  ${pokemon.types
                    .map((type) => `<li class="type ${type}">${type}</li>`)
                    .join("")}
              </ol>
  
              <img
                src="${pokemon.photo}"
                alt="${pokemon.name}"
              />
            </div>
          </li>
    `;
  }

  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  // debugger;

  // Calculo do offset
  const qtdRecordWithNextPage = offset + limit;

  // se a quantidade de registro é maior ou igual ao maxRecords
  if (qtdRecordWithNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    // Removendo o botão
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
