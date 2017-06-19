var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12
};
var count = 0;

function getLength(obj) {
  for (var key in obj) {
    count++;
  }
  console.log(count);
}

getLength(student);
