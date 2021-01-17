/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента 
(тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4*/
const items = document.querySelectorAll('li.item');
console.log('В списке', items.length, 'категории.')
items.forEach(item => {
    const title = item.querySelector('h2');
    const list = item.querySelectorAll('ul li'); 
    console.log('Категория:', title.textContent, '\nКоличество элементов:', list.length); 
    //console.dir(list)
    //console.dir(title)
    //console.dir(items)
})

/*items.map(item => {
    const title = item.querySelector('h2');
    const list = item.querySelectorAll('ul li');
    return {
        title: title.textContent,
        count: list.length
    }
}).forEach(entry => {
    console.log('Категория:', entry.title,'\nКоличество элементов:', entry.count);
})*/