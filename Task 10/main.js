
//const ul=document.querySelector('.items');
//ul.firstElementChild.textContent='HELLO';
//ul.children[0].style.color='green';
//ul.children[1].style.color='yellow';

const btn=document.querySelector('.btn');
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
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        //localStorage.setItem('Name',nameInput.value);
        //console.log(localStorage.getItem('Name'));
        //localStorage.setItem('Email',emailInput.value);
        //console.log(localStorage.getItem('Email'));
        //localStorage.setItem(nameInput.value,emailInput.value);
        //console.log(localStorage.getItem(nameInput.value));


        /////LOCAL STORAGE AS OBJECT

        let ob={
            "Name":nameInput.value,
            "Email":emailInput.value
        };

        let obs=JSON.stringify(ob);
        localStorage.setItem('UserDetails',obs);
        userList.appendChild(li);
        

        //getting deserialised
     
        let obd=JSON.parse(localStorage.getItem("UserDetails"));
        console.log(obd);

        //Clear
        nameInput.value='';
        emailInput.value='';
    }
}
