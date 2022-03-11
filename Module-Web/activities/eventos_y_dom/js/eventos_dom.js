//Global variables
var colorDb;
var rowIndx = 2;
var colIndx = 2;

function main() {
  colorDb = new Color([]);
  addInputs();

  onmousemove = function (event) {
    printMousePos(event);
  };

  let img = document.getElementById("myImg");
  img.addEventListener(
    "mouseenter",
    function (event) {
      changeImg(event);
    },
    false
  );
}

function printMousePos(event) {
  let mouseText = document.getElementById("mousePosition");
  mouseText.innerHTML =
    "Posición del mouse:" + " X: " + event.clientX + " Y: " + event.clientY;
}

function getFormvalue(event) {
  event.preventDefault();
  let form = document.getElementById("form1");
  let fullName = getName();
  writeName(fullName, form);
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

function insertRow(event) {
  event.preventDefault();
  let table = document.getElementById("sampleTable");
  row = table.insertRow(rowIndx);
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

function insertColumn(event) {
  event.preventDefault();
  let table = document.getElementById("sampleTable");
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

function addInputs() {
  let container = document.getElementById("inputContainer");
  let table = document.getElementById("myTable");
  let rows = table.rows;

  let inputContainer = document.createElement("div");
  inputContainer.style.paddingTop = "1%";

  inputContainer.appendChild(rowMiniContainer(rows));
  inputContainer.appendChild(colMiniContainer(rows));
  inputContainer.appendChild(contentMiniContainer());

  container.insertBefore(inputContainer, container.lastChild);
}

function rowMiniContainer(rows) {
  let lengthRows = rows.length;
  let inputRow = document.createElement("input");
  inputRow.type = "number";
  inputRow.min = 1;
  inputRow.max = lengthRows;
  inputRow.id = "inputRow";

  let rowDiv = document.createElement("div");
  let textRow = document.createElement("p");
  let contentRow = document.createTextNode("Row to change");
  textRow.appendChild(contentRow);
  rowDiv.appendChild(textRow);
  rowDiv.appendChild(inputRow);

  return rowDiv;
}

function colMiniContainer(rows) {
  let columns = rows[0];
  let lengthCols = columns.children.length;
  let inputCol = document.createElement("input");
  inputCol.type = "number";
  inputCol.min = 1;
  inputCol.max = lengthCols;
  inputCol.id = "inputCol";

  let colDiv = document.createElement("div");
  let textCol = document.createElement("p");
  let contentCol = document.createTextNode("Column to change");
  textCol.appendChild(contentCol);
  colDiv.appendChild(textCol);
  colDiv.appendChild(inputCol);

  return colDiv;
}

function contentMiniContainer() {
  let textInput = document.createElement("input");
  textInput.type = "text";
  textInput.id = "newContent";

  let textDiv = document.createElement("div");
  let textExp = document.createElement("p");
  let content = document.createTextNode("New value");
  textExp.appendChild(content);
  textDiv.appendChild(textExp);
  textDiv.appendChild(textInput);

  return textDiv;
}

function changeContent(event) {
  event.preventDefault();
  let table = document.getElementById("myTable");
  let indxRow = document.getElementById("inputRow").value;
  let indxCol = document.getElementById("inputCol").value;
  try {
    let row = table.rows[indxRow - 1];
    let cell = row.children[indxCol - 1];
    let content = document.getElementById("newContent");
    cell.innerText = content.value;
  } catch (error) {
    alert("Indice fuera de rango");
  }
}

function removeColor(event) {
  event.preventDefault();
  let select = document.getElementById("colorSelect");
  let color = select.value;
  select.remove(select.selectedIndex);
  colorDb.removeColor(color);
}

function addColor(event) {
  event.preventDefault();

  let select = document.getElementById("colorSelect");

  let newColor = document.createElement("option");

  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  newColor.text = "#" + randomColor;

  if (!(newColor in colorDb.getColors())) {
    select.add(newColor);
    colorDb.addColor(newColor);
  } else {
    alert("Ese color ya se encuentra en la lista");
  }
}

class Color {
  constructor(arrayOfColors) {
    this.colors = arrayOfColors;
    let select = document.getElementById("colorSelect");
    for (let i = 0; i < select.children.length; i++) {
      this.colors.push(select.children[i].value);
    }
  }

  getColors() {
    return this.colors;
  }

  addColor(color) {
    this.colors.push(color);
  }

  removeColor(color) {
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors[i] == color) {
        this.colors.splice(i, 1);
      }
    }
  }
}

function changeImg(event) {
  event.preventDefault();
  let img = document.getElementById("myImg");
  let height = generateRandomNumber(300, 600);
  let width = generateRandomNumber(300, 600);
  img.src = `https://picsum.photos/${width}/${height}`;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
