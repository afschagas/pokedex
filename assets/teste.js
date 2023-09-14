// // Variáveis da paginação
// const limit = 10;
// const offset = 0;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// pokeApi.getPokemons().then((pokemons) => {
//   const listItems = [];

//   for (let i = 0; i < pokemons.length; i++) {
//     const pokemon = pokemons[i];
//     listItems.push(convertPokemonToLi(pokemon));
//     // console.log(convertPokemonToLi(pokemon));
//     // pokemonList.innerHTML += convertPokemonToLi(pokemon);
//   }
//   console.log(listItems);
// });

// // Como fazer uma requisição utilizando o Fetch
// // Processamento assíncrono
// fetch(url)
//   .then((response) => response.json())
//   // Devolve um resultado
//   .then((jsonBody) => jsonBody.results)
//   .then((pokemons) => {
//     // debugger;
//     // console.log(pokemonList);

//     // for para lista
//     for (let i = 0; i < pokemons.length; i++) {
//       const pokemon = pokemons[i];
//       console.log(convertPokemonToLi(pokemon));
//       pokemonList.innerHTML += convertPokemonToLi(pokemon);
//     }
//   })
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Requisição concluída!"));

// // fetch(url)
// //   // Converte pra JSON
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   // Sucesso
// //   .then(function (jsonBody) {
// //     console.log(jsonBody);
// //   })
// //   // Falha na requisição
// //   .catch(function (error) {
// //     console.error(error);
// //   })
// //   // Dependente do sucesso ou da falha da requisição
// //   .finally(function () {
// //     console.log("Requisição concluída!");
// //   });

// // O que esse fetch nos retorna?

// // Quando terminar todos as promessas, vou ter a lista como resultado.
// Promise.all([
//   fetch("https://pokeapi.co/api/v2/pokemon/1"),
//   fetch("https://pokeapi.co/api/v2/pokemon/2"),
//   fetch("https://pokeapi.co/api/v2/pokemon/3"),
//   fetch("https://pokeapi.co/api/v2/pokemon/4"),
// ]).then((results) => {
//   console.log(results);
// });

// // function convertPokemonTypesToLi(pokemonTypes) {
// //   return pokemonTypes.map((typeSlot) => {
// //     return `
// //     <li class="type">${typeSlot.type.name}</li>
// //     `;
// //   });
// }

// .then((pokemonsDetails) => {
//   debugger;
//   console.table(pokemonsDetails);
// });

// function convertPokemonTypesToLi(pokemonTypes) {
//   return pokemonTypes.map(
//     (typeSlot) => `<li class="type">${typeSlot.type.name}</li>`
//   );
// }
