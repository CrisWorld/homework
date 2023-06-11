var man = [											
    {											
        id: 1 ,										
        name: "Quần Nam",										
        code: "TC1025011BA",										
        price :"200000",										
        image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"										
                                                
    },											
    {											
        id: 2 ,										
        name: "Quần Nam",										
        code: "TC1025011BA",										
        price :"200000",										
        image:"https://bizweb.dktcdn.net/100/426/984/files/phong-cach-classic-nam.png?v=1640061366799"										
    },											
    {											
        id: 3 ,										
        name: "Quần Nam",										
        code: "TC1025011BA",										
        price :"200000",										
        image:"https://bizweb.dktcdn.net/100/426/984/files/phong-cach-classic-nam.png?v=1640061366799"										
                                                
    },											
    {											
        id: 4 ,										
        name: "Quần Nam",										
        code: "TC1025011BA",										
        price :"200000",										
        image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"										
                                                
    },											
                                                
    ];											
var women = [											
    {											
        id: 1,										
        name :"Quần nữ",										
        code: "TC543235",										
        price : "200000",										
        image:"https://bizweb.dktcdn.net/100/426/984/files/phong-cach-classic-nam.png?v=1640061366799"										
    },											
    {											
        id: 2,										
        name :"Quần Nữ",										
        code: "TC543235",										
        price : "200000",										
        image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"										
    },											
    {											
        id: 3,										
        name :"Quần Nữ",										
        code: "TC543235",										
        price : "200000",										
        image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"										
                                                
    },											
    {											
        id: 4,										
        name :"Quần Nữ",										
        code: "TC543235",										
        price : "200000",										
        image:"https://channel.mediacdn.vn/428462621602512896/2022/5/11/vulcano-1-1652263546844522213228.jpg"										
                                                
    },											
                                                
    ];		
var list = document.getElementsByClassName("product-items");
man.forEach(element => {
   var demo = '<div class="card" style="width:400px">';
   demo += '<img class="card-img-top" src="'+element.image+'" alt="Card image">';
   demo += '<div class="card-body">';
   demo += '<h4 class="card-title">Quần Nam</h4>';
   demo += '<p class="card-text">'+element.price+'đ</p>';
   demo += '<a href="#" class="btn btn-primary">Mua Ngay</a>';
   demo += '</div></div>';
   list[0].innerHTML += demo;
});		
women.forEach(element => {
    var demo = '<div class="card" style="width:400px">';
   demo += '<img class="card-img-top" src="'+element.image+'" alt="Card image">';
   demo += '<div class="card-body">';
   demo += '<h4 class="card-title">Quần Nữ</h4>';
   demo += '<p class="card-text">'+element.price+'đ</p>';
   demo += '<a href="#" class="btn btn-primary">Mua Ngay</a>';
   demo += '</div></div>';
   list[1].innerHTML += demo;
 });								