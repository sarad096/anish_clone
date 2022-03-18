console.log("This is tut 16");
let element = document.createElement('li');
let text = document.createTextNode('this is text node')
element.appendChild(text);
// add a class name to the li element
element.className = 'chiledul';
element.id = 'createdLi';
// element.innerHTML = 'This is created by anish';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element);

let elem2 = document.createElement('h2');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode("this is replace")
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'))

myul.removeChild(document.getElementById('lui'));
 