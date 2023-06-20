let man = [{
    id:1,
    name:"Trang phục nam 2025",
    price:"150.000",
    type: "1",
    image:"https://i.pinimg.com/564x/d2/3c/3c/d23c3ccf22d9495ce5bc96f4a25c63bd.jpg"
},
{
    id:2,
    name:"Trang phục nam 2025",
    price:"150.000",
    type: "1",
    image:"https://th.bing.com/th/id/OIP.V8AZVaLsmTGHBlJ6luO-twHaHa?pid=ImgDet&rs=1"
},
{
    id:3,
    name:"Trang phục nam 2025",
    price:"150.000",
    type: "1",
    image:"https://i.pinimg.com/564x/d3/44/3d/d3443d54fd60f700df12d8bf7bb75942.jpg"
},
{
    id:4,
    name:"Trang phục nam 2025",
    price:"150.000",
    type: "1",
    image:"https://i.pinimg.com/564x/4a/1c/5b/4a1c5b5ed2d008ab5d21d98ffd26026a.jpg"
}
];
let women = [
{
    id:5,
    name:"Trang phục nữ 2025",
    price:"150.000",
    type: "2",
    image:"https://i.pinimg.com/564x/a1/bc/cb/a1bccb51e27f75d98063c9c655dcb5d9.jpg"
},
{
    id:6,
    name:"Trang phục nữ 2025",
    price:"150.000",
    type: "2",
    image:"https://i.pinimg.com/564x/47/0a/20/470a20ff851801094680d12230b092d2.jpg"
},
{
    id:7,
    name:"Trang phục nữ 2025",
    price:"150.000",
    type: "2",
    image:"https://i.pinimg.com/564x/6f/1f/0b/6f1f0ba6d25dde8d5384d83a4796a1a5.jpg"
},
{
    id:8,
    name:"Trang phụ nữ 2025",
    price:"150.000",
    type: "2",
    image:"https://i.pinimg.com/564x/85/3f/bb/853fbb818f3c2fff054b0b4da6d96875.jpg"
}
];
var current_id;
var current_type;
function loadMale(){
    var content = "";
    document.getElementsByClassName('male-style')[0].style = "background-color: #FFF4F4";
    document.getElementsByClassName('female-style')[0].style = "background-color: whilesmoke";
    document.getElementById('items').innerHTML = "";
    for (var i = 0; i < man.length; i++) {
        content += '<div class="card">' +
                            '<img class="card-img-top" src="'+man[i].image+'" alt="Card image">' +
                            '<div class="card-body">'+
                                '<h4 class="card-title">'+man[i].name+'</h4>' +
                                '<p class="card-text">Giá: '+man[i].price+'đ</p>'+
                                '<div style="display: flex; justify-content: space-around;">'+
                                    '<a href="#" class="btn btn-primary">Đặt ngay</a>'+
                                    '<a href="#" onclick="editProduct('+man[i].id+',1)" style="color: white; background-color: #F1C376; padding: 11px; padding-top: 7px; border-radius: 4px;"><i class="fa-solid fa-pen-to-square"></i></a>'+
                                    '<a href="#" onclick="removeProduct('+man[i].id+',1)" style="color: white; background-color: #CC3333; padding: 11px; padding-top: 7px; border-radius: 4px;"><i class="fa-solid fa-trash"></i></a>'+
                                '</div></div></div>';
    }
    document.getElementById('items').innerHTML += content;
}
function loadFemale(){
    var content = "";
    document.getElementsByClassName('female-style')[0].style = "background-color: #FFF4F4";
    document.getElementsByClassName('male-style')[0].style = "background-color: whilesmoke";
    document.getElementById('items').innerHTML = "";
    for (var i = 0; i < women.length; i++) {
        content += '<div class="card">' +
                            '<img class="card-img-top" src="'+women[i].image+'" alt="Card image">' +
                            '<div class="card-body">'+
                                '<h4 class="card-title">'+women[i].name+'</h4>' +
                                '<p class="card-text">Giá: '+women[i].price+'đ</p>'+
                                '<div style="display: flex; justify-content: space-around;">'+
                                    '<a href="#" class="btn btn-primary">Đặt ngay</a>'+
                                    '<a href="#" onclick="editProduct('+women[i].id+',2)" style="color: white; background-color: #F1C376; padding: 11px; padding-top: 7px; border-radius: 4px;"><i class="fa-solid fa-pen-to-square"></i></a>'+
                                    '<a href="#" onclick="removeProduct('+women[i].id+',2)" style="color: white; background-color: #CC3333; padding: 11px; padding-top: 7px; border-radius: 4px;"><i class="fa-solid fa-trash"></i></a>'+
                                '</div></div></div>';
    }
    document.getElementById('items').innerHTML += content;
}
var src;
var image = document.getElementById('myfile');
    image.addEventListener('change', (event) => {
        const files = event.target.files;
        const file = files[0];
        src=URL.createObjectURL(file);
    });
function resetInput(){
    document.getElementById('product-name').value = "";
    document.getElementById('product-price').value = "";
    document.getElementById('product-kind').value = "";
    document.getElementById('myfile').value = "";
}
function addProduct(){
    var pname = document.getElementById('product-name').value;
    var pprice = document.getElementById('product-price').value;
    var pkind = document.getElementById('product-kind').value;
   if (pkind == "1" && pprice != "" && pname != "" && src !="") {
    man.push({
        id: man[man.length-1].id+1,
        name: pname,
        price: pprice,
        type: "1",
        image: src
    })
    resetInput();
    loadMale();
   } else if (pkind == "2" && pprice != "" && pname != "" && src !="") {
        women.push({
            id: women[women.length-1].id+1,
            name: pname,
            price: pprice,
            type: "2",
            image: src
        })
        resetInput();
        loadFemale();
   } else alert("Lỗi");
}
function removeProduct(id, type){
    if (type == '1'){
        for (var i = 0; i <man.length; i++){
            if (man[i].id == id){
                man.splice(i, 1);
            }
            loadMale();
        }
    } else {
        for (var i = 0; i <women.length; i++){
            if (women[i].id == id){
                women.splice(i, 1);
            }
        }
        loadFemale();
    }

}
function editProduct(id, type){
    if (type == '1'){
        for (var i = 0; i < man.length; i++){
            if (man[i].id == id){
            document.getElementById('product-name').value = man[i].name;
            document.getElementById('product-price').value = man[i].price;
            document.getElementById('product-kind').value = type;
            current_i = i;
            }
        }
    } else
    if (type == '2'){
        for (var i = 0; i < women.length; i++){
            if (women[i].id == id){
            document.getElementById('product-name').value = women[i].name;
            document.getElementById('product-price').value = women[i].price;
            document.getElementById('product-kind').value = type;
            current_i = i;
            }
        }
    }
    current_type = type;
}
function updateProduct(){
    if (current_type == '1' && current_id !== "" && src !== undefined){
        man[current_i].name = document.getElementById('product-name').value;
        man[current_i].price = document.getElementById('product-price').value;
        man[current_i].image = src;
        loadMale();
    } else
    if (current_type == '2' && current_id !== "" && src !== undefined){
        women[current_i].name = document.getElementById('product-name').value;
        women[current_i].price = document.getElementById('product-price').value;
        women[current_i].image = src;
        loadFemale();
    } else alert("Lỗi!")

}
document.querySelector('.male-style').addEventListener('click',loadMale); 
document.querySelector('.female-style').addEventListener('click',loadFemale);  
document.querySelector('.add-button').addEventListener('click',addProduct);