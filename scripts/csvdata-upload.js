(function (){
    var DELIMITER = ',';
    var NEWLINE = '\n';
    var qRegex = /^"|"$/g; //replacing any double quotes
    var i = document.getElementById('file');
    var table = document.getElementById('table');

    if (!i){
        return;
    }

    // Check if file exists
    i.addEventListener('change', function(){
        if (!!i.files && i.files.length > 0 ){
            var file = i.files[0];
            if (!file.name.endsWith('.csv')) {
                alert("Invalid file type. File must be CSV!");
                return;
            }
            parseCSV(i.files[0]);
        }
    });

    function parseCSV(file){
        if(!file || !FileReader){
            return;
        }

        var reader = new FileReader();

        reader.onload = function(e){
            toTable(e.target.result);
            var csvData = e.target.result;
            localStorage.setItem('csvData',csvData);
            window.location.href = 'index.html';

        };

        reader.readAsText(file);

        
    }

    function displayDataOnDashboard() {
        var csvData = localStorage.getItem('csvData');
        if (csvData) {
            toTable(csvData);
        }
    }
    
    displayDataOnDashboard();

    function toTable(text){
        if  (!text || !table){
            return;
        }

        //clear table
        while (!!table.lastElementChild){
            table.removeChild(table.lastElementChild);
        }

        var rows = text.split(NEWLINE);
        var headers = rows.shift().trim().split(DELIMITER);
        var htr = document.createElement('tr'); //create table rows

        headers.forEach(function(h){
            var th = document.createElement('th'); //create table header cells
            var ht = h.trim();

            if (!ht){
                return;
            }

            th.textContent = ht.replace(qRegex, '');
            htr.appendChild(th); //allows table header cells to be added into table header rows

        });
        //Adding header rows to our table
        table.appendChild(htr);

        var rtr; //actual rows in our tables
        rows.forEach(function (r){
            r = r.trim(); //removes any extra space

            if(!r){
                return;
            }
            var cols = r.split(DELIMITER); //creating columns

            if(cols.length === 0){
                return;
            }

            rtr = document.createElement('tr');

            cols.forEach(function(c){
                var td = document.createElement('td');
                var tc = c.trim();

                td.textContent = tc.replace(qRegex,'');
                rtr.appendChild(td);
            });
            table.append(rtr);

        });

    }
})();