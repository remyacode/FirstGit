var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');



//form submit event
form.addEventListener('submit',addItem);

//edit button
itemList.addEventListener('click',edititem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filteritems);

//Description
/*
<form id="addForm" class="form-inline mb-3">
      <input type="text" class="form-control mr-2" id="item">
      <input type="submit" class="btn btn-dark" value="Submit">

      //
*/
      //create description on existing html

var newdiv=document.createElement('input');

newdiv.type='text';

//add class
newdiv.className='form-control mr-2';

//add id
newdiv.id='description';

//add attribute
newdiv.setAttribute('title','hello div');

//create text node
var newd=document.createTextNode('Hello World');
//add text todvi
newdiv.appendChild(newd);


var contain=document.querySelector('.container #main #addForm');
var h1=document.querySelector('.container #addForm #item');


//console.log(newdiv);

//newdiv.style.fontSize='30px';

h1.insertAdjacentElement("afterend",newdiv);




//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newitem=document.getElementById('item').value;
    var newdes=document.getElementById('description').value;

    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //console.log(li);
    //add text node with input value
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createTextNode(newdes));
    //create delete button
    var deleteBtn = document.createElement('button');

        //create edit button
        var editBtn=document.createElement('button');

  

  //add classes to delete button
  deleteBtn.className='btn btn-danger btn-sm float-right delete';

      //add classes to edit
      editBtn.className='btn btn-danger btn-sm float-right edit';

          //append text node delete
    deleteBtn.appendChild(document.createTextNode('X'));

    //append text node edit
    editBtn.appendChild(document.createTextNode('EDIT'));

//remya: to order the buttons in list



    
    //append button to li
    li.appendChild(deleteBtn);

    //append edit to li
li.appendChild(editBtn);

    

    //append li to list
    itemList.appendChild(li);
}
//edit item
function edititem(e){
    console.log("EDIT");
    //alert("Edit");
}


//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter item
function filteritems(e){
    //convert to lowercase
    var text=e.target.value.toLowerCase();
    //get list
    var items=itemList.getElementsByTagName('li');

    //convert to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var dname=item.childNodes[2].textContent;
        
        
        if(itemName.toLowerCase().indexOf(text)!=-1 || dname.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
          
        }
    });

}


