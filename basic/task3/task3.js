var date = new Date();
var mm = date.getMonth() + 1;
var dd = date.getDate();
var yyyy = date.getFullYear();

if (mm < 10) mm = '0' + mm;
if (dd <10) dd = '0' + dd;

console.log(mm + "-" + dd + '-' + yyyy);
console.log(mm + "/" + dd + '/' + yyyy);
