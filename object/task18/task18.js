function checkDOMElement(obj) {
  if (obj && obj.nodeType === 1) {
    return true;
  } else {
    return false;
  }
}

console.log( checkDOMElement(jQuery('body')[0]) );
