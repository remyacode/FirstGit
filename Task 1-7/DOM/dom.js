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
/*
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

*/

//TRAVERSING THE DOM//

var  itemlist=document.querySelector('#items');
//paretNode
/*
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode);


//parentelement

console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);


//childnodes
//console.log(itemlist.childNodes);

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='yellow';

//firstchild
console.log(itemlist.firstChild);

//firstElementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='Hello 1';



//lastchild
console.log(itemlist.lastChild);

//lastElementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='Hello 4';


//next sibling

console.log(itemlist.nextSibling);

//next elementsibling

console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);

//previouselementSibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='green';


*/

//createlement

//create a div

var newdiv=document.createElement('div');

//add class
newdiv.className='hello';

//add id
newdiv.id='hello1';

//add attribute
newdiv.setAttribute('title','hello div');

//create text node
var newd=document.createTextNode('Hello World');
//add text todvi
newdiv.appendChild(newd);

var contain=document.querySelector('header .container');
var h1=document.querySelector('header h1');


console.log(newdiv);

newdiv.style.fontSize='30px';

contain.insertBefore(newdiv,h1);

/////////////////////////////////

//Hello World b4 item1


//createlement

//create a div

var newdiv2=document.createElement('div');

//add class
newdiv2.className='hello';

//add id
newdiv2.id='hello2';

//add attribute
newdiv2.setAttribute('title','hello div');

//create text node
//var newd2=document.createTextNode('Hello World');
//add text todvi
newdiv2.appendChild(newd);

var contain=document.querySelector('.container #main');
var h2=document.querySelector('.container ul');


console.log(newdiv2);

newdiv2.style.fontSize='30px';

contain.insertBefore(newdiv2,h2);


///////////////////////////////////

//Hello World b4 item1 as listitem
/*

//createlement

//create a div

var newdiv2=document.createElement('div');

//add class
newdiv2.className='list-group-item';

//add id
newdiv2.id='hello2';

//add attribute
newdiv2.setAttribute('title','hello div');

//create text node
//var newd2=document.createTextNode('Hello World');
//add text todvi
newdiv2.appendChild(newd);

var contain=document.querySelector('.container #main #items');
var h2=document.querySelector('.container ul li');


console.log(newdiv2);

newdiv2.style.fontSize='30px';

contain.insertBefore(newdiv2,h2);

*/


