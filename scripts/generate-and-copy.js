// Generate a Password and Copy It to the Clipboard
const generateAndCopyButton = document.getElementById("generate-and-copy-button");
const password = document.getElementById("password");
const length = document.getElementById("length");
const includeLowerCase = document.getElementById("includeLowerCase");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const generatePassword = (length, includeLowerCaseChecked, includeUpperCaseChecked, includeNumbersChecked, includeSymbolsChecked) => {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxtz";
  const lowerUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+?:{}[]";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCaseChecked ? lowerCaseChars : "";
  allowedChars += includeUpperCaseChecked ? lowerUpperCase : "";
  allowedChars += includeNumbersChecked ? numberChars : "";
  allowedChars += includeSymbolsChecked ? symbolChars : "";

  if (length <= 0) {
    return "Password length must be at least 1";
  }
  if (allowedChars.length === 0) {
    return "At least 1 character set needs to be selected";
  }

  for (let x = 0; x < length; x++) {
    const randomIndex = Math.round(Math.random() * (allowedChars.length - 1));
    console.log(randomIndex);
    password += allowedChars[randomIndex];
  }

  console.log(password);
  return password;
}

const generate = (length) => [...Array(length)].map(() => Math.random().toString(36)[2]).join('');

function copy() {
  const lengthValue = parseInt(length.value);
  const includeLowerCaseChecked = includeLowerCase.checked;
  const includeUpperCaseChecked = includeUpperCase.checked;
  const includeNumbersChecked = includeNumbers.checked;
  const includeSymbolsChecked = includeSymbols.checked;
  password.innerHTML = generatePassword(lengthValue, includeLowerCaseChecked, includeUpperCaseChecked, includeNumbersChecked, includeSymbolsChecked);
  let inp = document.createElement('input');
  document.body.appendChild(inp);
  inp.value = password.innerHTML;
  inp.select();
  document.execCommand('copy', false);
  inp.remove();
  length.value = Math.trunc(length.value);
}

window.addEventListener('keypress', function(event) {
  if (event.key === "Enter") copy()
});
generateAndCopyButton.addEventListener('click', function() {
  if (true) copy()
});
