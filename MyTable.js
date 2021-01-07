
function tableCreate() {
  //using document create table in html
  var body = document.getElementsByTagName("body")[0];
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");

  var cellVal = 11;//testing

  for (var i = 0; i < 5; i++)//50 is a sample number
  {
    var row = document.createElement("tr");
    for (var j = 0; j < 2; j++) //10 is a sample number
    {
      var cell = document.createElement("td");
      var temp = cellVal;
      var text = (cellVal % 1000) == 0 ? "000" : (cellVal % 1000);

      if (cellVal > 999)
      {
        temp /= 1000;
        while (temp > 999)
        {
          tempMod = temp % 1000;
          temp /= 1000;
          if (Math.floor(tempMod) == 0) {
            text = "000" + "," + text;
          }
          else {
            text = Math.floor(tempMod) + "," + text;
          }
        }
        text = Math.floor(temp) + "," + text;
      }

      var cellText = document.createTextNode(text);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cellVal *= 10;
    }

    tableBody.appendChild(row);
  }

  table.appendChild(tableBody);
  body.appendChild(table);
  table.setAttribute("border", "1");
}
