function getAllProp(obj) {
  return Object.getOwnPropertyNames(obj);
}

console.log(getAllProp({neme: "", nhk: ""}));
