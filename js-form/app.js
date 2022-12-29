const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const emailAddress = document.querySelector('#emailAddress');
const phoneNumber = document.querySelector('#phoneNumber');
const birthDate = document.querySelector('#birthDate');
const regulations = document.querySelector('#regulations');
const submit = document.querySelector('#submit');

const inputFields = [
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  birthDate,
  regulations,
  submit
];

const emailIcon = document.querySelector('#emailIcon');
const emailToolTip = document.querySelector('#emailToolTip');
const phoneIcon = document.querySelector('#phoneIcon');
const phoneToolTip = document.querySelector('#phoneToolTip');

const iconTipMap = new Map([
  [emailIcon, emailToolTip],
  [phoneIcon, phoneToolTip]
]);

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const phoneError = document.querySelector('#phoneError');
const birthDateError = document.querySelector('#birthDateError');
const regulationError = document.querySelector('#regulationError');

const errorMessages = [
  firstNameError,
  lastNameError,
  emailError,
  phoneError,
  birthDateError,
  regulationError,
];

let firstNameValid = false;
let lastNameValid = false;
let emailValid = false;
let phoneValid = false;
let birthDateValid = false;
let regulationsValid = false;
let formValid = false;

iconTipMap.forEach((value, key) => {
  key.addEventListener('mouseover', () => {
    value.style.display = 'block';
  })
  key.addEventListener('mouseleave', () => {
    value.style.display = 'none';
  })
});

firstName.addEventListener('keyup', () => {
  if(!(firstName.value).length) {
    firstNameError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> This field is required';
    document.querySelectorAll('span')[0].style.color = '#f00';
    firstNameError.style.visibility = 'visible';
    firstNameValid = false;
  } else if((firstName.value).match(/[0-9.,:;!#$%&"'*+\-/=?^_`{|}~@]/)) {
    firstNameError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> First name must include only letters';
    document.querySelectorAll('span')[0].style.color = '#f00';
    firstNameError.style.visibility = 'visible';
    firstNameValid = false;
  } else {
    firstNameError.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Correct value';
    document.querySelectorAll('span')[0].style.color = '#259e21';
    firstNameError.style.visibility = 'visible';
    firstNameValid = true;
  }
});

lastName.addEventListener('keyup', () => {
  if(!(lastName.value).length) {
    lastNameError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> This field is required';
    document.querySelectorAll('span')[1].style.color = '#f00';
    lastNameError.style.visibility = 'visible';
    lastNameValid = false;
  } else if((lastName.value).match(/[0-9.,:;!#$%&"'*+\-/=?^_`{|}~@]/)) {
    lastNameError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> Last name must include only letters';
    document.querySelectorAll('span')[1].style.color = '#f00';
    lastNameError.style.visibility = 'visible';
    lastNameValid = false;
  } else {
    lastNameError.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Correct value';
    document.querySelectorAll('span')[1].style.color = '#259e21';
    lastNameError.style.visibility = 'visible';
    lastNameValid = true;
  }
});

emailAddress.addEventListener('keyup', () => {
  if(!(emailAddress.value).length) {
    emailError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> This field is required';
    document.querySelectorAll('span')[2].style.color = '#f00';
    emailError.style.visibility = 'visible';
    emailValid = false;
  } else if(!(emailAddress.value).match(
    /[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9].[a-zA-z]/
    )) {
    emailError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> Email must include name, @, domain';
    document.querySelectorAll('span')[2].style.color = '#f00';
    emailError.style.visibility = 'visible';
    emailValid = false;
  } else {
    emailError.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Correct value';
    document.querySelectorAll('span')[2].style.color = '#259e21';
    emailError.style.visibility = 'visible';
    emailValid = true;
  }
});

phoneNumber.addEventListener('keyup', (e) => {
  if(!(phoneNumber.value).length) {
    phoneError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> This field is required';
    document.querySelectorAll('span')[3].style.color = '#f00';
    phoneError.style.visibility = 'visible';
    phoneValid = false;
  } else if (e.key != 'Backspace' &&
    (phoneNumber.value.length == 3 || phoneNumber.value.length == 7)) {
      phoneNumber.value += '-';
  } else if(!(phoneNumber.value).match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)) {
    phoneError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> Phone number must consist of 10 digits';
    document.querySelectorAll('span')[3].style.color = '#f00';
    phoneError.style.visibility = 'visible';
    phoneValid = false;
  } else {
    phoneError.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Correct value';
    document.querySelectorAll('span')[3].style.color = '#259e21';
    phoneError.style.visibility = 'visible';
    phoneValid = true;
  }
});

const lastAccecptedDate = displayDate(new Date(1900, 0, 1));
const todayDate = displayDate(new Date());

birthDate.addEventListener('change', () => {
  if(!birthDate.value) {
    birthDateError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> This field is required';
    document.querySelectorAll('span')[4].style.color = '#f00';
    birthDateError.style.visibility = 'visible';
    birthDateValid = false;
  } else if(birthDate.value && birthDate.value < lastAccecptedDate) {
    birthDateError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> You was not born before Januray 1, 1900';
    document.querySelectorAll('span')[4].style.color = '#f00';
    birthDateError.style.visibility = 'visible';
    birthDateValid = false;
  } else if(birthDate.value > todayDate) {
    birthDateError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> You cannot be born in the future';
    document.querySelectorAll('span')[4].style.color = '#f00';
    birthDateError.style.visibility = 'visible';
    birthDateValid = false;
  } else {
    birthDateError.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Correct value';
    document.querySelectorAll('span')[4].style.color = '#259e21';
    birthDateError.style.visibility = 'visible';
    birthDateValid = true;
  }
});

function displayDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if(parseInt(month) < 10) {
    month = '0' + month;
  }
  if(parseInt(day) < 10) {
    day = '0' + day;
  }
  return `${year}-${month}-${day}`;
}

regulations.addEventListener('change', () => {
  if(!regulations.checked) {
    regulationError.innerHTML =
    '<i class="fa-solid fa-circle-xmark"></i> This field is required';
    document.querySelectorAll('span')[5].style.color = '#f00';
    regulationError.style.visibility = 'visible';
    regulationsValid = false;
  } else {
    regulationError.innerHTML =
    '<i class="fa-solid fa-circle-check"></i> Correct value';
    document.querySelectorAll('span')[5].style.color = '#259e21';
    regulationError.style.visibility = 'visible';
    regulationsValid = true;
  }
});

submit.addEventListener('click', (e) => {
  if(!checkFormValidation()) {
    e.preventDefault();
    alert('Fill in the form with the correct values!');
  } else if(
    !confirm('Are you sure you want to send a form?')
  ) {
    e.preventDefault();
  }
});

function checkFormValidation() {
  let errorsNumber = errorMessages.length;
  const validInputs = [
    firstNameValid,
    lastNameValid,
    emailValid,
    phoneValid,
    birthDateValid,
    regulationsValid
  ];
  validInputs.forEach(input => {
    if(input == true) {
      errorsNumber -= 1;
    }
  });
  formValid = errorsNumber == 0 ? true : false;
  return formValid;
}