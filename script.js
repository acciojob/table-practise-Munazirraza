function createTable() {
    //Write your code here
  var rn=parseInt(prompt("Input number of rows"));
  var cn=parseInt(prompt("Input number of columns"));
  var table=document.getElementById("myTable");
	  // Clear any existing table content
	table.innerHTML="";
	for (let i = 0; i < rn; i++) {
		var newRow=table.insertRow(i);
		for (let j = 0; j < cn; j++) {
		var newCell=newRow.insertCell(j);
			newCell.innerHTML="Row-"+ i +" Column-"+j;
		}
		
	}
	
	
}