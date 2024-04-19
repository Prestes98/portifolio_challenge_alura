const inputs = document.querySelectorAll('input');

const objectValidate = {
  'nome' : (value, field) => {
    if (value.length <= 2) {
      appendChild(field);
    }
  },
  'email' : (value, field) => {
    if (value.length <= 2) {
      appendChild(field);
    }
  },
  'assunto' : (value, field) => {
    if (value.length <= 2) {
      appendChild(field);
    }
  }
}

function appendChild(field) {
  const selectField = document.querySelector(`input[name=${field}]`);
  if (selectField.nextElementSibling) return
  const errorText = document.createElement('small');
  errorText.innerText= ` Campo ${field} não preenchido corretamente!`;
  errorText.classList.add('error__text')
  selectField.parentElement.appendChild(errorText);
}

inputs.forEach(input => { 
  input.addEventListener('blur', validateForm)
} )

function validateForm(e) {
  objectValidate[e.target.name](e.target.value, e.target.name)
  console.log(e.target.value, e.target.name)
}
