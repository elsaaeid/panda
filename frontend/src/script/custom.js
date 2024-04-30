"use strict"
//CHANGING OF PROPERTIES OF STYLE IN PAGE
window.localStorage.setItem("colorLight", "#ffffff");
window.localStorage.setItem("colorDark", "#161616");
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const headerStyle = document.getElementById('header');
const iconClose = document.getElementById('iconClose');
let previewBox = document.querySelectorAll('.products-preview .preview');
var goToTopBtn = document.getElementById("myBtn");
let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let mobileMenuBarToggle = document.querySelector('.menuToggle');

//transfromDark
dark.addEventListener('click', ()=>{
    dark.style.display='none';
    light.style.display='block';
    document.body.style.backgroundColor= window.localStorage.getItem("colorDark");
    document.body.style.color= window.localStorage.getItem("colorLight");
    headerStyle.style.backgroundColor= window.localStorage.getItem("colorDark");
    headerStyle.style.color= window.localStorage.getItem("colorLight");
    iconClose.style.color= window.localStorage.getItem("colorLight");
    document.querySelector(".cart").style.backgroundColor= window.localStorage.getItem("colorDark");
    document.querySelector(".cart").style.color= window.localStorage.getItem("colorLight");
    previewBox.forEach(preview =>{
        preview.style.backgroundColor= window.localStorage.getItem("colorDark");
        preview.style.color= window.localStorage.getItem("colorLight");
      });
});

//transfromLight
light.addEventListener('click', ()=>{
  light.style.display='none';
  dark.style.display='block';
  document.body.style.backgroundColor= window.localStorage.getItem("colorLight");
  document.body.style.color= window.localStorage.getItem("colorDark");
  headerStyle.style.backgroundColor= window.localStorage.getItem("colorLight");
  headerStyle.style.color= window.localStorage.getItem("colorDark");
  iconClose.style.color= window.localStorage.getItem("colorDark");
  document.querySelector(".cart").style.backgroundColor= window.localStorage.getItem("colorLight");
  document.querySelector(".cart").style.color= window.localStorage.getItem("colorDark");
  previewBox.forEach(preview =>{
        preview.style.backgroundColor= window.localStorage.getItem("colorLight");
        preview.style.color= window.localStorage.getItem("colorDark");
      });
});

const changeWidthOfProgressBar = ()=> {
  const locationURLs = {
    Home : "/",
    Shows: "/shows",
    Products: "/products",
  }
  switch (document.location.pathname) {
    case locationURLs.Home:
      var scrollYOffset = (window.pageYOffset / 13.5 );
    case locationURLs.Shows:
      var scrollYOffset = (window.pageYOffset / 13.5 );
    case locationURLs.Products:
      var scrollYOffset = (window.pageYOffset / 9.3 );
    default:
      var scrollYOffset = (window.pageYOffset / 13.5 );
  }
    document.querySelector("#progress-bar").style.width = scrollYOffset + '%';
};
const appearTopButton = ()=> {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
}
  
  window.onscroll = ()=> {
    appearTopButton();
    requestAnimationFrame(changeWidthOfProgressBar);
};
  
  // When the user clicks on the button, scroll to the top of the document
  goToTopBtn.addEventListener('click', ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

//searchContentAnimation
searchBtn.onclick = ()=> {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    mobileMenuBarToggle.classList.add('hide');
}
closeBtn.onclick = ()=> {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    mobileMenuBarToggle.classList.remove('hide');
}

//mobileMenuBarToggle
mobileMenuBarToggle.onclick = ()=> {
    navigation.classList.toggle("open");
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}

//Navigation_ul_li_a_BorderBottomAnimation
const navigationItems = document.querySelectorAll("li a");
const bottomBorderAnimation = ()=> {
  navigationItems.forEach((item) =>
  item.classList.remove('activing'));
  this.classList.add('activing')
}
navigationItems.forEach((item) =>
  item.addEventListener('click',bottomBorderAnimation));
  
//filterCategoryMenu
// const filterMenuInner = document.querySelector("#filterMenuInner");
// const li = filterMenuInner.querySelector(".link");

// function activeMenu() {
//   for (i = 0; i < li.length; i++) {
//     li[i].remove('activing');
//     this.classList.add('activing');
//   }
// }
// filterMenuActived.forEach((item) =>
//   item.addEventListener('click',activeMenu));

const filterMenu = document.querySelector(".filterMenu");
const FiltersLink = document.querySelector("#FiltersLink");
FiltersLink.onclick = ()=> {
  filterMenu.classList.toggle("active");
};

const itemsContainer = document.querySelector('.product-container');
// Smooth scale effect transition
const itemsImage = document.querySelectorAll('.product-container li .image');
Array.from(itemsImage).forEach(function(item){
    item.addEventListener('mouseenter', scaleOut);
    item.addEventListener('mouseleave', scaleIn);
});

// Scale out event
function scaleOut(e){
    // console.log(e)
    e.target.style.transform = `scale(1.05)`
    e.target.style.transition = `0.7s` 
}
// Scale in event
function scaleIn(e){
    // console.log(e)
    e.target.style.transform = `scale(1)`
    e.target.style.transition = `0.7s` 
};

//FILTER PRODUCTS BY SELECT
const links =document.querySelectorAll('.link');
links.forEach((link)=>{
  link.addEventListener('click',(e)=>{
    e.preventDefault();
    // setActiveBtn(e);
    const btnfilter=e.target.dataset.filter;
    const itemsContainer = document.querySelector('.product-container');
    const itemsLink = itemsContainer.querySelectorAll('.product');
    itemsLink.forEach((item=>{
      let boxfilter = item.getAttribute('dataFilterTarget');
      if(btnfilter=='all'){
        item.style.display="block";
      }else if(btnfilter==boxfilter){
        item.style.display="block";
        }else{
          item.style.display="none";
        }

    }));
  });
});

// cart
let cartIcon = document.querySelector('#cart-icon');
let cartModel = document.querySelector('#cart');
let closeCart = document.querySelector('#close-cart');
// Open Cart
cartIcon.onclick = () => {
 cartModel.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
 cartModel.classList.remove("active");
};

//Add_IconCart&DeleteTransform

function Add_IconTransform() {
    document.querySelectorAll('.product-container .add-to-cart').forEach(addButton =>{
  addButton.onclick = () =>{
previewAddedIconTransform();
    addButton.style.display = 'none';
    let addName = addButton.getAttribute('id');
    document.querySelectorAll('.product-container .cart-remove').forEach(removeCart =>{
      let removeName = removeCart.getAttribute('added_target');
      if(addName == removeName){
        removeCart.style.display = 'inline-block';
        document.querySelector(".clear-cart").style.display = 'inline-block';
      };
    });
  };
});
}
Add_IconTransform();

//Remove_IconCart&DeleteTransform
function Remove_IconTransform() {
   document.querySelectorAll('.product-container .cart-remove').forEach(removeCart =>{
  
  removeCart.onclick = () =>{

    previewRemovedIconTransform();
    removeCart.style.display = 'none';
    document.querySelector(".clear-cart").style.display = 'none';
    let removeName = removeCart.getAttribute('added_target');
    document.querySelectorAll('.product-container .add-to-cart').forEach(addButton =>{
      let addName = addButton.getAttribute('id');
      if(addName == removeName){
        addButton.style.display = 'inline-block';
      };
    });
  };
});
}

Remove_IconTransform();



//previewAddedIconTransform

function previewAddedIconTransform() {
    document.querySelectorAll('.products-preview .add-to-cart').forEach(addButtonPreview =>{
  addButtonPreview.onclick = () =>{
Add_IconTransform();
    addButtonPreview.style.display = 'none';
    let addNamePreview = addButtonPreview.getAttribute('id');
    document.querySelectorAll('.products-preview .cart-remove').forEach(removeCartPreview =>{
      let removeNamePreview = removeCartPreview.getAttribute('added_target');
      if(addNamePreview == removeNamePreview){
        removeCartPreview.style.display = 'inline-block';
        document.querySelector(".clear-cart").style.display = 'inline-block';
      };
    });
  };
});

}
previewAddedIconTransform();

//previewRemovedIconTransform
function previewRemovedIconTransform() {
 document.querySelectorAll('.products-preview .cart-remove').forEach(removeCartPreview =>{
  
  removeCartPreview.onclick = () =>{
Remove_IconTransform();

    removeCartPreview.style.display = 'none';
    document.querySelector(".clear-cart").style.display = 'none';
    let removeNamePreview = removeCartPreview.getAttribute('added_target');
    document.querySelectorAll('.products-preview .add-to-cart').forEach(addButtonPreview =>{
      let addNamePreview = addButtonPreview.getAttribute('id');
      if(addNamePreview == removeNamePreview){
        addButtonPreview.style.display = 'inline-block';
      };
    });
  };
});
}

previewRemovedIconTransform();




//cartTest
function myDisplayer(some) {
  document.getElementById("cartTest").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = document.getElementsByClassName("total-count");

// some code (try to change x to 5)

  if (x > 0) {
    myResolve("");
  } else if (x = 0) {
    myReject("cart is empty");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);


