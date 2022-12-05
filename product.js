//tạo 1 mảng chứa các thông tin cũng như giá trị của từng sản phẩm
const arryListProduct = [
    {
        id: 1,
        cate : "Thịt",
        img : "image 26 (3).png",
        name : "Thịt",
        price : 30
    },
    {   id: 2,
        cate : "Thịt",
        img : "image 26 (3).png",
        name : "Thịt",
        price : 30
    },
    {    id: 3,
        cate : "Thịt",
        img : "image 26 (3).png",
        name : "Thịt",
        price : 30
    },
    {     id: 4,
        cate : "cá",
        img : "image 26 (3).png",
        name : "cá",
        price : 30
    },
    {   id: 5,
          cate : "cá",
        img : "image 26 (3).png",
        name : "cá",
        price : 30
    },
    {     id: 6,
        cate : "cá",
        img : "image 26 (3).png",
        name : "cá",
        price : 30
    }
];
//tạo 1 function để có thể tái sử dụng nhiều lần
function showProduct(data) {
    //liên kết với file html bằng DOM
    let main = document.querySelector(".main-conten");

    //kiểm tra nếu biến main tồn tại, thì mới hoạt động
    if(main) {
            //dùng để clear mỗi lần sử dụng lại hàm
        main.innerHTML = "";
        //chạy for để load hết biến trong bảng data (bảng tự truyền vào)
        for (let item of data) {
            main.innerHTML += `
            <a href="chitiet.html?id=${item.id}">
                <div class="item">
                    <div class="img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="name">
                        <p>${item.name}</p>
                    </div>
                </div>
            </a>
            `;
        }
    }
} 
showProduct(arryListProduct);
//tạo ra hàm dùng để lọc sản phẩm
let cate = document.querySelector("#cate");
function fitleProduct() {
    let meat = arryListProduct.filter(function(item) {
        return item.cate == "Thịt";
    });
    let fiz = arryListProduct.filter(function(item) {
        return item.cate == "cá";
    });
    if(cate.value == "Thịt") { showProduct(meat)}
    else showProduct(fiz)
}
//addEventListener dùng để tạo sự kiện cho thẻ đã được tương tác bằng DOM ở bên file js
// cấu trúc của hàm addEventListener : 1.addEventListener("2",3)
// 1 : là thẻ muốn tạo thêm sự kiện cho nó
// 2 : là sự kiện mình muốn vd như onclick nhưng sẽ bỏ chữ on đi
// 3 : function mình muốn sự kiện đó hoạt động nhưng cũng bỏ dấu ()
if(cate) {
    cate.addEventListener("change" , fitleProduct);

}
//hàm filter dùng để trả ra 1 mảng mới từ mảng củmà các giá trị trong mảng đó trả về là true
// function được gọi là colback
//cấu trúc của filter 
// let 1 = 2.filter(function(item) { return 3})
// 1 : là tên mảng mới 
// 2 : mảng mà các bạn muốn lọc
// 3 : câu lệnh điều kiện để trả ra các giá trị muốn
    // let arryNew = arryListProduct.filter(function(item) {
    //     return item.cate == "thit";
    // });
    // console.log(arryNew);
function detailProduct () {

    //dùng để lấy dữ liệu tự trên đường link sau dấu ?
    let _url = new URLSearchParams(window.location.search).get('id');
    console.log(_url);
    let _product = arryListProduct.filter(function(item) {
        return item.id == _url;
    });
    console.log(_product);
    let productMain = document.querySelector(".product-main");
    if(productMain) {
        productMain.innerHTML = `
        <img src="${_product[0].img}" alt="">
        <p>${_product[0].name}</p>
        <p>${_product[0].price}$</p>
    `;
    }
}
detailProduct ();