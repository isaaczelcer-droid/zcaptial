// password-gate.js
const PASSWORD = 'printmoney';
let attempts = 0;
const MAX = 3;

function ask() {
  const input = prompt('Enter password:');
  if (!input || attempts >= MAX) return showDenied();
  attempts++;
  if (input === PASSWORD) return;
  alert('Wrong. Try again.');
  ask();
}
function showDenied() {
  document.body.innerHTML = '<h1 style="text-align:center;margin-top:100px;color:#a00;">ACCESS DENIED</h1>';
}
document.body.innerHTML = '<div style="text-align:center;padding:50px;"><h2>Loading...</h2></div>';
ask();