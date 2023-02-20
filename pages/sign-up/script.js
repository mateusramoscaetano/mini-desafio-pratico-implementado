const form = document.querySelector('form');

const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');

const btnSignUp = document.querySelector('.sign-up-button');
const btnCancel = document.querySelector('.cancel-button');
const btnRedirectToLogin = document.querySelector('.click-here');

const nameValidation = document.querySelector('.name-validation');
const emailValidation = document.querySelector('.email-validation');
const passwordValidation = document.querySelector('.password-validation');



inputName.addEventListener('change', (e) => {
    inputName.value = e.target.value

});

inputEmail.addEventListener('change', (e) => {
    inputEmail.value = e.target.value

});

inputPassword.addEventListener('change', (e) => {
    inputPassword.value = e.target.value

});

async function registerUser() {
    try {
        const response = await api.post('/usuarios', {
            nome: inputName.value,
            email: inputEmail.value,
            senha: inputPassword.value,
        });

        console.log()
         if (response.status === 200) {
             window.location.href = '../login/index.html'
         }
    } catch (error) {
        console.log(error.response.data)
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();


    if (!inputName.value || !inputEmail.value || !inputPassword.value) {
        if (!inputName.value) {
            nameValidation.textContent = 'Por favor, preencha seu nome'
            nameValidation.style.display = 'block'
        }
        if (!inputEmail.value) {
            emailValidation.textContent = 'Por favor, preencha seu E-mail'
            emailValidation.style.display = 'block'
        }
        if (!inputPassword.value) {
            passwordValidation.textContent = 'Por favor, preencha sua senha'
            passwordValidation.style.display = 'block'
        }

    }

    registerUser();


})

btnRedirectToLogin.onclick = function () {
    window.location = '../login/index.html'
}