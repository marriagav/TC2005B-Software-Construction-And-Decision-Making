function main() {
  onmousemove = function (e) {
    printMousePos(e);
  };
}

function printMousePos(e) {
  let mouseText = document.getElementById("mousePosition");
  mouseText.innerHTML =
    "Posición del mouse:" + " X: " + e.clientX + " Y: " + e.clientY;
  // console.log("Posición del mouse:" + " X: " + e.clientX + " Y: " + e.clientY);
}

function getFormvalue(event) {
  event.preventDefault();
  let form = document.getElementById("form1");
  let fullName = getName();
  writeName(fullName, form);
  //   console.log(fullName);
}

function getName() {
  let firstName = document.getElementsByName("fname")[0].value;
  let lastName = document.getElementsByName("lname")[0].value;
  return firstName + " " + lastName;
}

function writeName(text, insertInto) {
  let tag = document.createElement("p");
  let content = document.createTextNode(text);
  tag.appendChild(content);
  insertInto.appendChild(tag);
}

var rowIndx = 2;
var colIndx = 2;
function insertRow() {
  let table = document.getElementById("sampleTable");
  row = table.insertRow(rowIndx);
  //   console.log(row);
  for (let i = 0; i < colIndx; i++) {
    let column = document.createElement("td");
    let content = document.createTextNode(
      "Row " + (rowIndx + 1).toString() + " column " + (i + 1).toString()
    );
    column.appendChild(content);
    row.appendChild(column);
  }
  rowIndx++;
}

function insertColumn() {
  let table = document.getElementById("sampleTable");
  // console.log(row);
  for (let i = 0; i < rowIndx; i++) {
    let row = table.rows[i];
    let column = document.createElement("td");
    let content = document.createTextNode(
      "Row " + (i + 1).toString() + " column " + (colIndx + 1).toString()
    );
    column.appendChild(content);
    row.appendChild(column);
  }
  colIndx++;
}
