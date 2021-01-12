/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял
 его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/
const validInputRef = document.querySelector('#validation-input');
validInputRef.addEventListener('blur', handleInputBlur);
function handleInputBlur(event) {
  if (event.target.value.length === 6) {
    validInputRef.classList.remove('invalid');
       validInputRef.classList.add('valid'); 
  } else {
    validInputRef.classList.remove('valid');
        validInputRef.classList.add('invalid');
        } 
}

//console.dir(validInputRef);