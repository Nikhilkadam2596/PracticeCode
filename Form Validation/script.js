const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('message-container');
const message = document.getElementById('message');


let isValid = false;
let passwordMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    //Style main message for error
    if(!isValid){
    message.textContent = 'Please fill out all the fields.';
    message.style.color = 'red';
    }

   // check if passwords match
    if(password1.value === password2.value){
    passwordMatch = true;
    password1.style.color = 'green';
    password2.style.color = 'green';       
    } else {
    passwordMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red'; 
    password1.style.color = 'red';
    password2.style.color = 'red';  
    }

  // if passwords match
     if(isValid && passwordMatch) {
        message.textContent = 'Succesfully Signed Up!'
        message.style.color = 'green'
     }
}    


function processFormData(e){
    e.preventDefault();
    // Validate form
    validateForm();

}

// event listner
form.addEventListener('submit', processFormData);