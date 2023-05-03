let categoria = document.querySelector(`#categories`);

let clase = document.querySelectorAll('li.item');
console.log(`Number of categories: ${clase.length}`)
let lista = document.querySelectorAll('li');
/* cuenta de elementos  */
clase.forEach(item =>{
    const nombre =item.querySelector(`h2`).textContent
console.log(`Category: ${nombre}`)

const clase =item.querySelectorAll(`li`);
const cuenta = clase.length

console.log(`Elements ${cuenta}`)
});



