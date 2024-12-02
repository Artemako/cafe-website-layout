window.onload = edit_table;
window.onunload = save_table

function edit_table() {
    const table_body = document.getElementById('table_body');
    var menu = JSON.parse(localStorage.getItem('menu'));
    console.log(menu);
    for (var key in menu) {
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");

        var text1 = document.createTextNode(key);
        var text2 = document.createTextNode(menu[key]);
        var text3 = document.createElement("button");
        
        var btn = document.createTextNode("удалить");
        var atr = document.createAttribute("onclick");
        atr.value = "deleteRow(this);"
        text3.appendChild(btn);
        text3.setAttributeNode(atr);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        table_body.appendChild(row);
        td1.addEventListener('click', function func() {
            var input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);
            var td = this;
            input.addEventListener('blur', function () {
                if (this.value) {
                    td.innerHTML = this.value;
                } else {
                    td.innerHTML = "Пусто";
                }
                td.addEventListener('click', func);
            });
            this.removeEventListener('click', func);
        });
        td2.addEventListener('click', function func() {
            var input = document.createElement('input');
            input.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(input);
            var td = this;
            input.addEventListener('blur', function () {
                if (this.value) {
                    td.innerHTML = this.value;
                } else {
                    td.innerHTML = "Пусто";
                }
                td.addEventListener('click', func);
            });
            this.removeEventListener('click', func);
        });
    }
}



function add_row() {
    const table_body = document.getElementById('table_body');
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    var text1 = document.createTextNode("Пусто");
    var text2 = document.createTextNode("Пусто");
    var text3 = document.createElement("button");
        
    var btn = document.createTextNode("удалить");
    var atr = document.createAttribute("onclick");
    atr.value = "deleteRow(this);"
    text3.appendChild(btn);
    text3.setAttributeNode(atr);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table_body.appendChild(row);
    td1.addEventListener('click', function func() {
        var input = document.createElement('input');
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(input);
        var td = this;
        input.addEventListener('blur', function () {
            if (this.value) {
                td.innerHTML = this.value;
            } else {
                td.innerHTML = "Пусто";
            }
            td.addEventListener('click', func);
        });
        this.removeEventListener('click', func);
    });
    td2.addEventListener('click', function func() {
        var input = document.createElement('input');
        input.value = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(input);
        var td = this;
        input.addEventListener('blur', function () {
            if (this.value) {
                td.innerHTML = this.value;
            } else {
                td.innerHTML = "Пусто";
            }
            td.addEventListener('click', func);
        });
        this.removeEventListener('click', func);
    });
}

function save_table() {
    const table_body = document.getElementById('table_body');
    localStorage.removeItem("menu")
    var obj = {};
    for (var i = 0, row; row = table_body.rows[i]; i++) {
        obj[row.cells[0].innerHTML] = row.cells[1].innerHTML;
    }
    console.log(JSON.stringify(obj));
    localStorage.setItem("menu", JSON.stringify(obj));
}

function deleteRow(r) {
    r.parentNode.parentNode.parentNode.removeChild(r.parentNode.parentNode);
}   