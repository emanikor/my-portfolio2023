let toggleButton = document.querySelector('.toggle-button')
let navbarlinks = document.querySelector('.navbar-links')


toggleButton.addEventListener('click' , ()=>{
 navbarlinks.classList.toggle('active');

})
window.onscroll =()=>{
  navbarlinks.classList.remove('active')
 
}


// contact-function
const myForm =  document.querySelector('#form-lable');
const messageBtn=  document.querySelector('#message-btn');
const  emailInput=  document.querySelector('#email');
const nameInput =  document.querySelector('#name');
const msgField =  document.querySelector('.message');
const msg=  document.querySelector('.msg');

myForm.addEventListener('submit' , onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    
    if(nameInput.value ==='' || emailInput.value === '' || msgField.value ===''){

        msg.classList.add('error')
        msg.innerHTML = 'please enter all field';
        setTimeout(()=> msg.remove(), 3000);
    }
    else{
    msg.classList.add('success')
    msg.innerHTML = 'successfull sent a message to Mr Emanikor';
    setTimeout(()=> msg.remove(), 3000);
    }
}