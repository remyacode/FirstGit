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
/*
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


*/
/*
//GET ELEMENTS BY CLASS NAME//

var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';
items[4].textContent="Hey";


//Gives eRROR
//items.style.backgroundColor='#f4f4f4';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';

}
*/
/*
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';

}

*/

/*
//GetElementbytagname//

var li= document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';
li[4].textContent='hey';
//Gives eRROR
//items.style.backgroundColor='#f4f4f4';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';

}

*/

//QuerySElector//
var header = document.querySelector('#main-header');
header.style.borderBotton='solid 4pc #ccc';

var input=document.querySelector('input');
input.value='Hello World';

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color='red';

var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color='coral';
seconditem.style.backgroundColor='green';

var thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility="hidden";

//QUERYSELECTORALL//

var titles=document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');
var sec=document.querySelectorAll('li');
sec[1].style.color="green";

for(var i=0;i<odd.length; i++){
odd[i].style.backgroundColor='green';
//even[i].style.backgroundColor='#ccc';
}