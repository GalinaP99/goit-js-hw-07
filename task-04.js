/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
<body>

Счётчик: <input type="button" value="1" data-counter>
Ещё счётчик: <input type="button" value="2" data-counter>

<script>
  document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { // если есть атрибут...
      event.target.value++;
    }

  });
  const wrap_button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter '),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
wrap_button.sub.addEventListener('click', increment);
wrap_button.add.addEventListener('click', decrement);
</script>
</body>*/

const counter = document.querySelector('#value');
const dec = document.querySelector('[data-action="decrement"]');
const inc = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};
dec.addEventListener('click', decrement);
inc.addEventListener('click', increment);
 /*
 var counterValue = 0;
function increment(){
	counterValue +=1;
  document.getElementById('value').innerHTML = counterValue;
}
function decrement(){
	counterValue -=1;
  document.getElementById('value').innerHTML = counterValue;
}
 .addEventListener('click', () => {
    let total = 0;
    total -= 1; 
   document.getElementById('value').textContent = total;
  });

  .addEventListener('click', () => {
    let total = 0;
    total += 1;
     document.getElementById('value').textContent = total;
  });*/

 //counterValue.addEventListener