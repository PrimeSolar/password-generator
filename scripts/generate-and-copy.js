const button = document.getElementById("button");
const password = document.getElementById("password");
const length = document.getElementById("length");

const generate = (length) => [...Array(length)].map(() => Math.random().toString(36)[2]).join('');

function copy() {
  const lengthValue = parseInt(length.value);
  password.innerHTML = generate(lengthValue);
  let inp = document.createElement('input');
  document.body.appendChild(inp);
  inp.value = password.innerHTML;
  inp.select();
  document.execCommand('copy', false);
  inp.remove();
}

window.addEventListener('keypress', function(event) {
  if (event.key === "Enter") copy()
});
button.addEventListener('click', function() {
  if (true) copy()
});
