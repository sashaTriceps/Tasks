function html(str, ...values) {
  let string = "";
  
  for (let i = 0; i < values.length; i++) {
  	string += str[i];
    string += escapeHTML(values[i]);
  }
  return string;
}

const mustEscape = '<>&"'
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`)

function escapeHTML(string) {
  return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
  	.replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}