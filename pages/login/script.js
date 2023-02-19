
const inputEmail = document.querySelector('.input-email');
const inputPassword = document.querySelector('.input-password');
const btnLogin = document.querySelector('.login-button');
const btnRedirectToSignUp = document.querySelector('.click-here')
const validation = document.querySelector('.validation');
const emailValidation = document.querySelector('.email-validation')
const passwordValidation = document.querySelector('.password-validation')
const form = document.querySelector('form')
const boxLogin = document.querySelector('.box-login')

function reset() {
    emailValidation.textContent = '';
    passwordValidation.textContent = '';
}

inputEmail.addEventListener('change', (e) => {
    emailValidation.style.display = 'none'
    inputEmail.style.border = 'none'
    inputEmail.value = e.target.value
    reset();
});

inputPassword.addEventListener('change', (e) => {
    passwordValidation.style.display = 'none'
    inputPassword.style.border = 'none'
    inputPassword.value = e.target.value
    reset();
});

async function makeLogin() {
    try {
        const response = await api.post('/login', {
            email: inputEmail.value,
            senha: inputPassword.value
        });

        const { token } = response.data

        localStorage.setItem('token', token)

        if (response.status === 200) {
            window.location.href = '../../index.html'
        }

    } catch (error) {
        passwordValidation.textContent = 'Usuário não encontrado e/ou senha incorreta'
        passwordValidation.style.display = 'block'

        return
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    e.stopPropagation();



    if (!inputEmail.value || !inputPassword.value) {
        if (!inputEmail.value) {
            emailValidation.textContent = 'Por favor, preencha o e-mail'
            emailValidation.style.display = 'block'
            inputEmail.style.border = '1px solid red'
        }
        if (!inputPassword.value) {
            passwordValidation.textContent = 'Por favor, preencha sua senha'
            passwordValidation.style.display = 'block'
            inputPassword.style.border = '1px solid red'
        }

    } else {
        makeLogin();

    }
})

btnRedirectToSignUp.onclick = function () {
    window.location = '../sign-up/index.html'
}


