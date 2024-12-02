window.onload = add_orders;

function add_orders(){
    var orders = JSON.parse(localStorage.getItem('orders'));
    console.log(orders);
    for (var key in orders){        
        var block = document.createElement("div");
        block.className = "block";
        tagshtml = "<h2>Доставка #" + key + "</h2>" + "<p>Имя: " + orders[key]["name"] + "</p>" + "<p>Email: " + orders[key]["email"] + "</p>" + "<p>Адрес: " + orders[key]["address"] + "</p>" + "<p>Меню:</p>" + "<pre class = 'receipt'>" + orders[key]["text"] + "</pre>" + "<p class = 'receipt'>ИТОГО: " + orders[key]["summa"] + "₽</p>";
        console.log(tagshtml);
        block.innerHTML = tagshtml;    
        document.getElementsByClassName('flex-vert')[0].appendChild(block);
    }
}
