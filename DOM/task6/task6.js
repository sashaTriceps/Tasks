function changeContent() {
  tr = window.prompt('Выберите строку таблицы (0, 1, 2)');
  td = window.prompt('Виберите ячейку строки (0, 1)');
  text = window.prompt('Введите текст');
  var table = document.querySelector('#myTable').rows[parseInt(tr, 10)].cells;
  table[parseInt(td, 10)].innerHTML=text;
}
