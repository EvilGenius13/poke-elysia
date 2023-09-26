const { Pokemon, PokeItem, PokeMove} = require('fast-poke-fetch');

(async () => {
  const pokemonData = await Pokemon('pikachu');
  console.log(pokemonData);

  const pokemonData2 = await Pokemon('peekachoo');
  console.log(pokemonData2);

  const itemData = await PokeItem('potion');
  console.log(itemData);

  const moveData = await PokeMove('tackle');
  console.log(moveData);

})();

(async () => {
  const pokemonData = await Pokemon('squirtle');
  console.log(pokemonData);

  const itemData = await PokeItem('master-ball');
  console.log(itemData);
  
  const pokemonData2 = await Pokemon('pikachu');
  console.log(pokemonData2);
  
})();

