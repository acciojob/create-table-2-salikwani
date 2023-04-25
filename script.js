function createTable() {
    //Write your code here
	var row = prompt("Enter Number of rows");
	var column = prompt("Enter Number of column");
	for(var i=0;i<row;i++) {
		var r = document.createElement("tr");
		for(var j=0;j<column;j++) {
			var c = document.createElement("td");
			c.innerText = `Row-${i} Column-${j}`;
			r.appendChild(c);
		}
		document.querySelector("#myTable").appendChild(r);
	}
  
}
