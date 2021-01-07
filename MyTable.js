
function tableCreate() {

  var cellVal = 99;

  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < 50; i++)//50 is a sample number
  {
    var row = document.createElement("tr");

    for (var j = 0; j < 10; j++) //10 is a sample number
    {
      var cell = document.createElement("td");
      var text = '('+(i+1)+','+(j+1)+')';
      // var tempVal = cellVal;
      // tempVal /= 1000;
      // var temp = cellVal % 10;
      // if (cellVal >= 1) {
      //   var text += ","+cellVal;
      // }
      //var text = "test";
      var cellText = document.createTextNode(text);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cellVal += 1000;
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "1");
}
