/*Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов
в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
    коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div,
    сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>
<div id="boxes"></div>*/

const inputRef = document.querySelector('#controls > input');
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');
const createBoxesRef = document.querySelector('#boxes');

//const boxes = [];
//console.log(boxes)

btnRenderRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

// amount.target.value.push(boxes);
function createBoxes(amount) {
  const arrayForBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    arrayForBoxes.push(box);
  }
  return createBoxesRef.append(...arrayForBoxes);
}

function destroyBoxes() {
   const box = createBoxesRef.querySelector('#box');
  createBoxesRef.removeChild(box);
} 

/*function createBoxes(amount) {
  //const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    createBoxesRef.insertAdjacentHTML('afterbegin', '<div id="box"></div>');
   // boxes.push(box);
  };

 // return createBoxesRef;
//console.dir(amount.target.value);
}


/*function createBoxes = boxes.map(box => {
  createBoxesRef.insertAdjacentHTML('afterbegin', '<div></div>');
});
const createImagesList = images.map(image => {
  galleryRef.insertAdjacentHTML('afterbegin', `<li> <img src = ${image.url}
    alt = "${image.alt}"> </li>`);

  return galleryRef;
})*/
//console.dir(inputRef.value);