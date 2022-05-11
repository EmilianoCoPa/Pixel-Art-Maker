// Select color input
// Select size input
const rows = $('#inputHeight').val();
const columns = $('#inputWidth').val();
const canvas = $('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (grid) {
  grid.preventDefault();
  rows = $('#inputHeight').val();
  columns = $('#inputWidth').val();
  makeGrid(rows, columns);
})

function makeGrid() {

// Your code goes here!
  $('tr').remove();

  for (let i = 0; i < rows; i++) {
      const row = $('<tr />');
      // Create cells
      for (let j = 0; j < columns; j++) {
          // Add cell to current row
          const cell = '<td />';
          row.append(cell);
      }
      canvas.append(row);
  }
}

$('#pixelCanvas').click(function paintCell(paint) {
  const color = $('#colorPicker').val();

  if (paint.target.nodeName === 'TD') {
    paint.target.style.backgroundColor = color;
  }
})
