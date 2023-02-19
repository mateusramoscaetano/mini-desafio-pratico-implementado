const main = document.querySelector('main')

const logout = document.querySelector('.logout-button');
const btnAddContact = document.getElementById('add');

const modalAdd = document.querySelector('.modal-add');
const modalDelete = document.querySelector('.modal-delete');

const formAdd = document.querySelector('.form-add');
const formDel = document.querySelector('.form-del');

const closeAdd = document.querySelector('.close-add');
const closeDelete = document.querySelector('.close-delete');
const clear = document.querySelector('.clear')

const inputName = document.querySelector('.input-name');
const inputEmail = document.querySelector('.input-email');
const inputPhone = document.querySelector('.input-phone');

const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const phoneError = document.querySelector('.phone-error');

const confirmDeleteButton = document.querySelector('.confirm-delete-button');
const escButton = document.querySelector('.esc');

function resetError() {
    emailError.textContent = '';
    phoneError.textContent = '';
    nameError.textContent = '';
}
function resetValue() {
    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
}

btnAddContact.onclick = function () {
    modalAdd.style.display = 'block'
}

inputName.addEventListener('change', (e) => {
    validateForm();

})
inputEmail.addEventListener('change', (e) => {
    validateForm();

})
inputPhone.addEventListener('change', (e) => {
    validateForm();

})

let isValid = false;

function validateForm() {
    isValid = true;

    if (inputName.value === '' || inputEmail.value === '' || inputPhone.value === '') {
        if (!inputName.value) {
            isValid = false;
            nameError.classList.add('text')
            nameError.textContent = 'Por favor, preencha o nome.';

        } else {
            nameError.textContent = '';
        }

        if (!inputEmail.value) {
            isValid = false;
            emailError.classList.add('text')
            emailError.textContent = 'Por favor, preencha o e-mail.';

        } else {
            emailError.textContent = '';
        }

        if (!inputPhone.value) {
            isValid = false;
            phoneError.classList.add('text')
            phoneError.textContent = 'Por favor, preencha o telefone.';

        } else {
            phoneError.innerText = '';
        }


    } else {
        isValid = true;
        resetError();
    }

}

closeAdd.onclick = function () {
    if (modalAdd.style.display = 'block') {
        modalAdd.style.display = 'none'

        resetValue();

        resetError()
    }

}
idToRemove = '';
let id = 1

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    validateForm();

    if (isValid) {

        const novaBox = document.createElement('div');
        novaBox.id = id
        novaBox.classList.add('box-class')
        novaBox.classList.add('text')

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name-topic')
        nameSpan.classList.add('topic')
        nameSpan.textContent = inputName.value

        const emailSpan = document.createElement('span');
        emailSpan.classList.add('topic')
        emailSpan.textContent = inputEmail.value

        const phoneSpan = document.createElement('span');
        phoneSpan.classList.add('topic')
        phoneSpan.textContent = inputPhone.value

        const buttonDeleteContact = document.createElement('img')
        buttonDeleteContact.src = './assets/Icon-Trash.png'
        buttonDeleteContact.alt = 'trash-icon'
        buttonDeleteContact.classList.add('delete')

        main.appendChild(novaBox)
        novaBox.appendChild(nameSpan)
        novaBox.appendChild(emailSpan)
        novaBox.appendChild(phoneSpan)
        novaBox.appendChild(buttonDeleteContact)

        buttonDeleteContact.onclick = function (e) {
            modalDelete.style.display = 'block'
            idToRemove = e.target.parentElement.id
        }

        confirmDeleteButton.onclick = function () {
            document.getElementById(idToRemove).remove()
            modalDelete.style.display = 'none'
        }

        modalAdd.style.display = 'none'

        resetError()
        resetValue();

        id++;
    }
})

escButton.onclick = function () {
    modalDelete.style.display = 'none'

    resetValue();
}


closeDelete.onclick = function () {
    if (modalDelete.style.display = 'block') {
        modalDelete.style.display = 'none'
    }

}

clear.onclick = function (e) {
    resetError();
}

logout.addEventListener('click', () => {
    localStorage.removeItem('token')

    window.location.href = '../pages/login/index.html'
})

