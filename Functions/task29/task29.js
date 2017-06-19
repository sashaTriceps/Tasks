function someName() {
  console.log(arguments.callee.name);
}

someName();
