var obj = {
name : "David Rayy",
sclass : "VI",
rollno : 12
};

function deleteProperty() {
  console.log(obj);

  delete obj.rollno;

  console.log("-----------");
  console.log(obj);
}

deleteProperty();
