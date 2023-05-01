
//const ul=document.querySelector('.items');
//ul.firstElementChild.textContent='HELLO';
//ul.children[0].style.color='green';
//ul.children[1].style.color='yellow';

const btn=document.querySelector('#my-form .btn');
btn.addEventListener('click',(e1)=>{
    e1.preventDefault();
    console.log('click');
});
btn.addEventListener('mouseover',(e1)=>{
    
    console.log('mouseover');
});
btn.addEventListener('mouseout',(e1)=>{
    
    console.log('mouseout');
});



const myForm=document.querySelector('my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

btn.addEventListener('click',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value===''||emailInput.value===''){
        //alert('Please enetr fields');
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.id='listitem';
        
        ///////////delete
        
        const delBtn=document.createElement('button');
        
        //add classes to delete button
  delBtn.className='btn btn-danger btn-sm float-right delete';
  delBtn.id='del';
  //append text node delete
  delBtn.appendChild(document.createTextNode('Delete'));


  li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));


      //append button to li
      li.appendChild(delBtn);

        //localStorage.setItem('Name',nameInput.value);
        //console.log(localStorage.getItem('Name'));
        //localStorage.setItem('Email',emailInput.value);
        //console.log(localStorage.getItem('Email'));
        //localStorage.setItem(nameInput.value,emailInput.value);
        //console.log(localStorage.getItem(nameInput.value));

///////////////




        /////LOCAL STORAGE AS OBJECT

     const ob={
            "Name":nameInput.value,
            "Email":emailInput.value
        };

        var obs=JSON.stringify(ob);
        localStorage.setItem(emailInput.value,obs);
        userList.appendChild(li);
        //console.log(obs);

        //getting deserialised
     
        let obd=JSON.parse(localStorage.getItem(emailInput.value));
        //console.log(obd);
        //delBtn.addEventListener('click',removeItem);

        ////
        delBtn.onclick=(e)=>{
            localStorage.removeItem(ob.Email);
            
            ////////
            var itemList=document.getElementById('listitem').parentNode;
        if(e.target.classList.contains('delete')){
        //if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            
            //localStorage.removeItem(ob.Email);
            itemList.removeChild(li);
            
        //}
    }
            /////////


            }

        }
        //Clear
        nameInput.value='';
        emailInput.value='';
    }


/*


//remove item
function removeItem(e){
    var itemList=document.getElementById('listitem').parentNode;
    if(e.target.classList.contains('delete')){
        //if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            
            //localStorage.removeItem(ob.Email);
            itemList.removeChild(li);
            //https://www.youtube.com/embed/5yIm_UgaCYI
        //}
    }
}

*/
