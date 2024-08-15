const fileUpload = document.getElementById('file-upload');
const uploadBtn = document.getElementById('upload-btn');
const dataTable = document.getElementById('data-table');

uploadBtn.addEventListener('click', () => {
  const file = fileUpload.files[0];
  Papa.parse(file, {
    header: true,
    complete: function(results) {
      const data = results.data;
      const headers = results.meta.fields;
      displayData(data, headers);
    }
  });
});

function displayData(data, headers) {
    const tableHtml = `
      <table>
        <thead>
          <tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map(row => `
            <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    `;
    dataTable.innerHTML = tableHtml;
  }
  