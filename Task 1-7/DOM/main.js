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




//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newitem=document.getElementById('item').value;

    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    console.log(li);
    //add text node with input value
    li.appendChild(document.createTextNode(newitem));

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
    editBtn.appendChild(document.createTextNode('edit'));

//remya: to order the buttons in list

//append edit to li
li.appendChild(editBtn);

    
    //append button to li
    li.appendChild(deleteBtn);

    

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
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
}


