/*Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li.
 Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.*/
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  },
];

const galleryRef = document.querySelector('#gallery');
const ImagesList = images.map(image =>
  `<li><img src=${image.url} alt="${image.alt}"></li>`)
  .join('');

 // const createImagesList = images.join(ImagesList);

galleryRef.insertAdjacentHTML('beforeend', ImagesList);

console.log(ImagesList);
//console.log(images)

/*
const createImagesList = images.map(image => {
  galleryRef.insertAdjacentHTML('beforeend', `<li> <img src = ${image.url}
    alt = "${image.alt}"> </li>`);

  return galleryRef;
})

const createImagesList = images => {
    const titleRef = document.createElement('li');
    titleRef.classList.add('card');
    const imagesRef = document.createElement('img');
    imagesRef.setAttribute('src', images.url);
    imagesRef.setAttribute('alt', images.alt);
    titleRef.appendChild(imagesRef);
    return titleRef;
}
images.forEach(image => {
console.log(createImagesList(image));
});
const imagesList = images.map(image =>
    createImagesList(image));
const imagesListRef = document.querySelector('#gallery');
imagesListRef.append(...imagesList);
*/
/*const createGalleryItem = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);
galleryList.setAttribute("style", "list-style-type:none; display: flex;");*/