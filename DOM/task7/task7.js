function createTable() {
  tr = window.prompt('Введите количество строк');
  td = window.prompt('Введите количество ячеек в строке');

  var table = document.querySelector('#myTable');

  for (var i = 0; i < tr; i++) {
    var row = document.createElement('tr');
    table.appendChild(row);
    for (var j = 0; j < td; j++) {
      var cell = document.createElement('td');
      row.appendChild(cell);
      cell.innerHTML = 'text';
    }
  }
}
