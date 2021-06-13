let carts=document.querySelectorAll('.add-to-cart');

let products=[
  {
    name:'Платье миди с рукавами из фатина',
    tag:"1dress",
    price:21450,
    inCart:0
  },
  {
    name:'Миди-платье в горошек с рукавами',
    tag:"2dress",
    price:30950,
    inCart:0
  },
  {
    name:'Платье миди с разрезом на юбке',
    tag:"3dress",
    price:24012,
    inCart:0
  },
  {
    name:'Мини-платье с объемными рукавами',
    tag:"4dress",
    price:19450,
    inCart:0
  },
  {
    name:'Button-up blouse',
    tag:"1blouse",
    price:15950,
    inCart:0
  },
  {
    name:'Блуза на пуговицах',
    tag:"2blouse",
    price:15950,
    inCart:0
  },
  {
    name:'Атласная блузка',
    tag:"3blouse",
    price:12450,
    inCart:0
  },
  {
    name:'Блузка в стиле корсета',
    tag:"4blouse",
    price:16450,
    inCart:0
  },
  {
    name:'Блуза объемными рукавами',
    tag:"5blouse",
    price:25900,
    inCart:0
  },
  {
    name:'Пышная рубашка на плече',
    tag:"6blouse",
    price:8450,
    inCart:0
  },
  {
    name:'Блузка в горошек с рукавами',
    tag:"7blouse",
    price:17950,
    inCart:0
  },
  {
    name:'Блузка',
    tag:"8blouse",
    price:9450,
    inCart:0
  },
  {
    name:'Туфли на блочном каблуке в бежевом цвете',
    tag:"1shoes",
    price:17950,
    inCart:0
  },
  {
    name:'Туфли на блочном каблуке в черном цвете',
    tag:"2shoes",
    price:17950,
    inCart:0
  },
  {
    name:'Туфли на высоком каблуке в черном цвете',
    tag:"3shoes",
    price:10450,
    inCart:0
  },
  {
    name:'Шлепанцы на блочном каблуке в бежевом цвете',
    tag:"4shoes",
    price:7450,
    inCart:0
  },
  {
    name:'Спортивные шорты',
    tag:"1trosers",
    price:8450,
    inCart:0
  },
  {
    name:'Брюки c поясом',
    tag:"2trousers",
    price:14950,
    inCart:0
  },
  {
    name:'Брюки-палаццо',
    tag:"3trousers",
    price:9450,
    inCart:0
  },
  {
    name:'Цепочка с сердечками',
    tag:"1jew",
    price:11950,
    inCart:0
  },
  {
    name:'Цепочка с надписями',
    tag:"2jew",
    price:15950,
    inCart:0
  },
  {
    name:'Кулон',
    tag:"3jew",
    price:8450,
    inCart:0
  },
  {
    name:'Тройная цепочка',
    tag:"4jew",
    price:13450,
    inCart:0
  },
  {
    name:'Oбодки для волос',
    tag:"1accessories",
    price:1450,
    inCart:0
  },
  {
    name:'Сумка на плечо',
    tag:"2accessories",
    price:9950,
    inCart:0
  },
  {
    name:'Сумка на плечо',
    tag:"3accessories",
    price:5950,
    inCart:0
  },
  {
    name:'Сумка на плечо',
    tag:"4accessories",
    price:9450,
    inCart:0
  },
  {
    name:'Сумка с цепочкой',
    tag:"5accessories",
    price:7450,
    inCart:0
  },
  {
    name:'Ободки для волос',
    tag:"6accessories",
    price:1900,
    inCart:0
  }
]

for(let i=0; i<carts.length;i++){
  carts[i].addEventListener('click', ()=>{
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');

    if(productNumbers){
      document.querySelector('.cart span').textContent=productNumbers;
    }
}

function cartNumbers(product){

  let productNumbers=localStorage.getItem('cartNumbers');

  productNumbers=parseInt(productNumbers);

  if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
    document.querySelector('.cart span').textContent=productNumbers+1;
  }else{
    localStorage.setItem('cartNumbers',1)
    document.querySelector('.cart span').textContent=1;
  }
  setItems(product);

}

function setItems(product){
    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
//    console.log("My CartItems are", cartItems);

    if(cartItems!= null){
      if(cartItems[product.tag]==undefined){
        cartItems={
          ...cartItems,
          [product.tag]: product
        }
      }
      cartItems[product.tag].inCart+=1;
    }else{
    product.inCart = 1;
    cartItems={
    [product.tag]:product
    }
  }
  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
  //console.log("The product price",product.price);
  let cartCost=localStorage.getItem('totalCost');

  console.log("My CartCost is", cartCost);

  if(cartCost!==null){
    cartCost=parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost+product.price);
  }else{
    localStorage.setItem("totalCost",product.price);
  }

}

function displayCart(){
  let cartItems=localStorage.getItem("productsInCart");
  cartItems=JSON.parse(cartItems);
  let productContainer=document.querySelector(".products-container");

  console.log(cartItems);
  if(cartItems && productContainer){
    productContainer.innerHTML='';
    Object.values(cartItems).map(item=>{
      productContainer.innerHTML+=`
      <div class="product">
      <ion-icon name="close-circle"></ion-icon>
      <img src="${item.tag}.webp">
      <span>${item.name}</span></div>
      `
    });
  }
}
displayCart();
onLoadCartNumbers();
