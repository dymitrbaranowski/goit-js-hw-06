const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('ul');
const elements = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  //  console.log(itemEl);
  //  ulEl.append(itemEl)
  return itemEl;
});
//  return ulEl

ulEl.append(...elements)
// console.log(...itemEl.ingredient);
// console.log(ulEl.append(ingredients))