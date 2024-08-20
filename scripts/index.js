// // Retrieve the stored CSV data from local storage
// var csvData = localStorage.getItem('csvData');

// if (csvData) {
//   // Parse the CSV data and extract the fields
//   var fields = csvData.split('\n')[0].split(',');
//   var dataPaneHtml = '';

//   // Generate the HTML for the data pane with checkboxes
//   fields.forEach(function(field, index) {
//     dataPaneHtml += `
//       <div>
//         <input type="checkbox" id="field-${index}" value="${field}">
//         <label for="field-${index}">${field}</label>
//       </div>
//     `;
//   });

//   // Display the fields in the data pane
//   document.querySelector('.data-pane').innerHTML = dataPaneHtml;
// }