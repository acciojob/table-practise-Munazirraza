function insert_Row() {
    //Write your code here
	const table = document.getElementById('sampleTable');
  const newRow = table.insertRow(0); // Insert at position 1 (just after the header row)
  newRow.insertAdjacentHTML('beforeend', '<td>New Cell1</td><td>New Cell2</td>');
}