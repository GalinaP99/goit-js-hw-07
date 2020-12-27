/*В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
/*Напиши скрипт, который для каждого элемента массива ingredients
создаст отдельный li, после чего вставит все li за одну операцию
в список ul.ingredients.Для создания DOM - узлов используй document.createElement().*/
const createIngredientsList = ingredients => {
   const titleRef = document.createElement('li');
    titleRef.textContent = ingredients;
    return titleRef;
}

ingredients.forEach(ingredient => {
console.log(createIngredientsList(ingredient));
});
const ingredientsList = ingredients.map(ingredient =>
    createIngredientsList(ingredient));
const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...ingredientsList);
