function  insert_Row() {
  var table = document.querySelector('#sampleTable');

  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.innerHTML = 'text';

  tr.appendChild(td);
  table.appendChild(tr);
}
