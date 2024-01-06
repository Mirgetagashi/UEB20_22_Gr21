const usernameEl=document.querySelector('#username');
const emailEl=document.querySelector('#email');
const passwordEl=document.querySelector('#password');
const confirmPasswordEl=document.querySelector('#confirm-password');

const form = document.querySelector('.input-box');


form.addEventListener('submit', function(e){
     
    //lejon perdoruesi te shtyp butonin kur jane permbushur te gjitha fushat
    e.preventDefault();


    let isUsernameValid=checkUsername(),
        isEmailValid=checkEmail(),
        isPasswordValid=checkPassword(),
        isConfirmPasswordValid=checkConfirmPassword();

    let isFormValid=isUsernameValid&&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;
    
    if(isFormValid){

    }


});

const isRequired = value => value === '' ? false : true;


const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input,message)=>{
    const inputField=input.parentElement;

    inputField.classList.remove('success');
    inputField.classList.add('error');

    const error=inputField.querySelector('small');
    error.textContent=message;

};

const showSucces = (input,message)=>{

    const inputField=input.parentElement;

    inputField.classList.remove('error');
    inputField.classList.add('success');

    const error=inputField.querySelector('small');
    error.textContent='';

};

const isEmailValid = (email) => {
    //perdor nje shprehje rregullore per te kontrolluar emailin
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const checkUsername =()=>{
    let valid=false;
    const min=3,max=25;
    const username=usernameEl.value.trim();

    
    if(!isRequired(username)){
        showError(usernameEl,'Username cannot be blank.');
    
    }else if(!isBetween(username.length,min.max)){
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)

    }else{
        showSucces(usernameEl);
        valid=true;
    }
    return valid;
};

const checkEmail=()=>{
    let valid=false;
    const email=emailEl.value.trim();
    if(!isRequired(email)){
        showError(emailEl,'Email cannot be blank.');
    }else if(!isEmailValid(email)){
        showError(emailEl,'Email is not valid.')

    }else{
        showSucces(emailEl);
        valid=true;
    }
    return valid;
};

const checkPassword=()=>{
    let valid=false;
    const password=passwordEl.value.trim();

    if(!isRequired(password)){
        showError(passwordEl,'Paassword cannot be blank.');

    }else if(!isPasswordSecure(password)){
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    }else{
        showSucces(passwordEl);
        valid=true;
    }
    return valid;
};

const checkConfirmPassword=()=>{
    let valid=false;

    const confirmPassword=confirmPasswordEl.value.trim();
    const password=passwordEl.value.trim();

if(!isRequired(confirmPassword)){
    showError(confirmPasswordEl,'Please enter the password again');
}else if(password!==confirmPassword){
    showError(confirmPasswordEl,'Confrim password does not match');
}else{
    showSucces(confirmPasswordEl);
    valid=true;
}
return valid;

};
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));