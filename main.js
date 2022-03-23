// declare helper functions
function printRow(multiplier) {
  let row = "";
  for (let i = 1; i <= 10; i++) {
    let result = i * multiplier;
    row = row + formatCell(result);
  }
  console.log(row);
}

function formatCell(cell) {
  return cell.toString().padStart(4, " ");
}

// main for loop
for (let i = 1; i <= 10; i++) {
  printRow(i);
}
