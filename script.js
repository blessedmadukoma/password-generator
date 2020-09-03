const elPw = document.getElementById('pw');
const elCopy = document.getElementById('copy');
const elLen = document.getElementById('len');
const elUppercase = document.getElementById('uppercase');
const elLowercase = document.getElementById('lowercase');
const elNumber = document.getElementById('number');
const elSymbol = document.getElementById('symbol');
const elGenerate = document.getElementById('generate');
const elReset = document.getElementById('reset');

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+=";

function theLowerCase() {
  return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

function theUpperCase() {
  return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
}

function theNumber() {
  return number[Math.floor(Math.random() * number.length)];
}

function theSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateX() {
  const xs = [];
  if (elUppercase.checked) {
    xs.push(theUpperCase());
  }
  if (elLowercase.checked) {
    xs.push(theLowerCase());
  }
  if (elNumber.checked) {
    xs.push(theNumber());
  }
  if (elSymbol.checked) {
    xs.push(theSymbols());
  }
  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}

function generatePassword() {
  const len = elLen.value;
  console.log(len);

  let password = "";

  for (let i=0; i < len; i++) {
    const x = generateX();
    password += x;
  }

  elPw.innerText = password;
}

function resetPassword() {
  elPw.textContent = '';
}

// event listeners
elGenerate.addEventListener('click', generatePassword);
elCopy.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = elPw.innerText;

  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard');
});
elReset.addEventListener('click', resetPassword);