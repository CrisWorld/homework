var count = 0;
var total = 0;
var items = [];
function addItem(){
    count++;
    var item = {};
    item.id = count,
    item.name=document.getElementById("name-product").value;
    item.quantity = document.getElementById("quantity-product").value;
    item.price=document.getElementById("price-product").value;
    if (!(isNaN(item.quantity*item.price))){
    item.subtotal = item.quantity*item.price;
    total += parseFloat(item.subtotal);
    items.push(item);
    var demo = '<tr>';
    demo+='<td>'+count+'</td>';
    demo+='<td>'+item.name+'</td>';
    demo+='<td>'+item.quantity+'</td>';
    demo+='<td>'+item.price+'</td>';
    demo+='<td>'+item.subtotal+'</td>';
    demo+='</tr>';
    document.getElementById("item").innerHTML += demo;
    document.getElementById("total").innerHTML = total;
    } else alert("Wrong data!");
}