function getSize() {
  console.log('Ширина окна : ' + document.documentElement.clientWidth);
  console.log('Высота окна : ' + document.documentElement.clientHeight);
}

window.onload = getSize();
