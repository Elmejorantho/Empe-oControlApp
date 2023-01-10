const form = document.querySelector('#form');
const nameComplete = document.querySelector('#name');
const inputName = document.querySelector('#input-user');
const inputNumber = document.querySelector('#phone-number');
const inputEmail = document.querySelector('#input-email');
const inputPass = document.querySelector('#input-contraseña');
const inputPassConfirm = document.querySelector('#input-confirm');
const registerBtn = document.querySelector('#register-btn');


const USERNAME_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{6,12}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{8,24}$/;
const PHONE_REGEX = /^([0-9]){4}-[0-9]{7}$/;

let nameCompleteValidation = false;
let emailValidation = false;
let passValidation = false;
let passConfirmValidation = false;
let numberValidation = false;




    inputName.addEventListener('input', e =>{
    e.preventDefault()
     userNameValidation = USERNAME_REGEX.test(e.target.value);

     

     if (userNameValidation) {
        inputName.classList.add('correct');
        inputName.classList.remove('invalid');
     } else if (!userNameValidation) {
        inputName.classList.add('invalid');
        inputName.classList.remove('correct');
     };

     if (inputName.value === '') {
        inputName.classList.remove('correct');
        inputName.classList.remove('invalid');
    };
    });


    inputNumber.addEventListener('input', e => {
     phoneNumberValidation = PHONE_REGEX.test(e.target.value)
     const message = document.createElement('p');

     if (phoneNumberValidation) {
        inputNumber.classList.add('correct');
        inputNumber.classList.remove('invalid');
     } else if (!phoneNumberValidation) {
        inputNumber.classList.add('invalid');
        inputNumber.classList.remove('correct');
     };

     if (inputNumber.value === '') {
        inputName.classList.remove('correct');
        inputName.classList.remove('invalid');
    };
    });




    inputEmail.addEventListener('input', e =>{
        e.preventDefault();
        emailValidation = EMAIL_REGEX.test(e.target.value)

    if (emailValidation) {
        inputEmail.classList.add('correct');
        inputEmail.classList.remove('invalid');
    } else if (!emailValidation){
        inputEmail.classList.remove('correct');
        inputEmail.classList.add('invalid');
    };

    if (inputEmail.value === '') {
        inputEmail.classList.remove('correct');
        inputEmail.classList.remove('invalid');
    };
 });


 inputPass.addEventListener('input', e => {
    passValidation = PASSWORD_REGEX.test(e.target.value)
    
    if(passValidation) {
        inputPass.classList.add('correct');
        inputPass.classList.remove('invalid');
    } else {
        inputPass.classList.remove('correct');
        inputPass.classList.add('invalid');
    };

    if (inputPass.value === '') {
        inputPass.classList.remove('correct');
        inputPass.classList.remove('invalid');
    };

 })


 inputPassConfirm.addEventListener('input', e => {
e.preventDefault();

 passConfirmValidation = inputPass.value === e.target.value;

 if (passConfirmValidation) {
    inputPassConfirm.classList.add('correct');
    inputPassConfirm.classList.remove('invalid');
    registerBtn.removeAttribute('disabled');
} else if (!passConfirmValidation){
    inputPassConfirm.classList.remove('correct');
    inputPassConfirm.classList.add('invalid');
} ;


if (inputPassConfirm.value === '') {
    inputPassConfirm.classList.remove('correct');
    inputPassConfirm.classList.remove('invalid');
    
};
});

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const newUser = {
            nameComplete: nameComplete.value,
            username: inputName.value,
            number: inputNumber.value,
            email: inputEmail.value,
            password: inputPass.value
        }
       await axios.post('/api/users', newUser);
       window.location.pathname = '/login';

    } catch (error) {
        const p = document.createElement('p')
        p.innerHTML = error.response.data.error;
        p.classList.add('invalid')
        form.children[4] ? form.children[4].remove() : null
        form.append(p);
    }
});