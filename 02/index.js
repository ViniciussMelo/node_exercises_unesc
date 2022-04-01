const axios = require('axios');
const readline = require("readline-sync");

const numbers = [];
const heros = [];
const base_url = 'https://akabab.github.io/superhero-api/api/id'

while (true) {
  const number = readline.question("Write a number or E for exit: ");
  const formattedNumber = parseInt(number);
  
  if (!formattedNumber) break;

  numbers.push(formattedNumber);
}

(async() => {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const hero = await axios(`${base_url}/${number}.json`)
      .catch((err) => console.log(`err: ${err}`));
  
    const {  id, name, slug, appearance, images } = hero.data;
  
    heros.push({
      id,
      name,
      slug,
      race: appearance.race,
      md: images.md
    });
  }

  console.log('heros: ', heros.length);
  heros.forEach((hero) => console.log(hero));
})()