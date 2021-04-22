var cities = [];
var order = [];
var elem = prompt("ENTER CITIES");
var rows = elem;
var cols = elem;

var totalCities = elem;
var geek = new Array(rows);
for (var i = 0; i < rows; i++) {
  geek[i] = new Array(cols);
}
let table = document.createElement("table");

for (var i = 0; i < rows; i++) {
  let div = document.createElement("tr");
  for (var j = 0; j < cols; j++) {
    let td = document.createElement("td");
    let inp = document.createElement("input");
    td.appendChild(inp);
    // geek[i][j] = prompt(
    //   "ENTER DISTANCE BW CITIES " + parseInt(i + 1) + " and " + parseInt(j + 1)
    // );
    div.appendChild(td);
  }
  table.appendChild(div);
}
document.querySelector(".input_elem").appendChild(table);
let inpAll = document.querySelectorAll("input");
console.log(inpAll);
document.querySelector(".input_el").classList.remove("hidden");
document.querySelector(".input_el").addEventListener("click", (e) => {
  e.preventDefault();

  inpAll = document.querySelectorAll("input");
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      geek[i][j] = parseInt(inpAll[i*rows + j].value);
      console.log(inpAll[i + j].value);
    }
  }
  window.location.href="final.html?array="+JSON.stringify(geek);
  // setup()
});
