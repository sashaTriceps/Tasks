function changeContent() {
  tr = parseInt(window.prompt('Выберите строку таблицы (1, 2, 3)'), 10);
  td = parseInt(window.prompt('Виберите ячейку строки (1, 2)'), 10);
  text = window.prompt('Введите текст');

  var table = document.querySelector('#myTable');

  var row = table.rows[tr - 1];

  var cells = row.getElementsByTagName('td');
  var cell = cells[td - 1];

  cell.innerHTML = text;
}
