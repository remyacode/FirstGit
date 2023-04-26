/*
//examine the document object
console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title= 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);

console.log(document.images);
*/

//GET ELEMENT BY ID//

//console.log(document.getElementById('header-title'));
console.dir(document);
var headerttitle=document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerttitle);
//headerttitle.textContent='Hello';
//headerttitle.innerText='Goodbye';
//console.log(headerttitle.innerText);
//headerttitle.innerHTML='<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000';
var additem=document.getElementById('main').firstElementChild;

console.log(additem.innerHTML);
additem.style.color= "green" ;
additem.style.fontWeight='bold';





