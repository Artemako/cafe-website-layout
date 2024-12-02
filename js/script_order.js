window.onload = set_menu;
/*
var obj = {
    "Картошка Фри (120гр)" : 109,
    "Картофель 'Айдахо' (130гр)" : 169,
    "Сырные палочки (120гр)" : 139,
    "Пицца 'Маргарита' (320гр)" : 349,
    "Пицца 'Пепперони' (340гр)" : 419,
    "Пицца '4 Сыра' (310гр)" : 419,
};


var serialObj = JSON.stringify(obj);
localStorage.setItem("menu", serialObj);
*/

function set_menu(){
    const select = document.getElementById('select_food');
    var menu = JSON.parse(localStorage.getItem('menu'));
    console.log(menu); 
    for (var key in menu){
        var option = document.createElement("option");
        option.text = key + " - " + menu[key] + "₽";
        option.value = menu[key];        
        select.appendChild(option);
    }
}

function add_order(){
    let list = document.getElementById("order_list");
    var select = document.getElementById("select_food");
    var select_option = select.options[select.selectedIndex];
    list.textContent += select_option.text + "\n";
    var price = select_option.text.match(/(\d+)/g).at(-1);
    set_summa_order(price);
}

order_summa = 0

function set_summa_order(price){
    let text_summa = document.getElementById("order_summa");
    order_summa += Number(price);
    text_summa.textContent = "ИТОГО: " + order_summa + "₽" + "\n";
}

function do_order(){
    if (order_summa == 0){
        alert('Пожалуйста, выберите хотя бы один товар');
        return false;
    }
    if (document.forms[0].name.value == "") {
        alert('Пожалуйста, введите Ваше имя');
        document.mailform.name.focus();
        return false;
    }
    if (document.forms[1].email.value == "") {
        alert('Пожалуйста, введите электронный адрес');
        document.mailform.email.focus();
        return false;
    }
    if (document.forms[2].address.value == "") {
        alert('Пожалуйста, введите почтовый адрес');
        document.mailform.address.focus();
        return false;
    }
    var newOrder = {
        text : document.getElementById("order_list").textContent,
        name : document.forms[0].name.value,
        email : document.forms[1].email.value,
        address : document.forms[2].address.value,
        summa : order_summa
    };
    
    var orders = JSON.parse(localStorage.getItem('orders'));
    console.log(orders);
    orders[new Date().getMilliseconds()] = newOrder;
    localStorage.setItem("orders", JSON.stringify(orders));
    location.reload();
    return true;
}
