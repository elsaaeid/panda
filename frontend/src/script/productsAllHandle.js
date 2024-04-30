import { products } from "./productsItems.js";

//DISPLAY_PRODUCTS
var products_container = document.getElementById('products-container');
products_container.innerHTML = '<ul class="row grid-container product-container" ' + '>' + products.map(function ({id, cartTarget, idCart, product_name, product_price, product_image, added_to_cart, quick_view, dataFilterTarget}) {
          return '<li' + ' ' + 'class="col-lg-3 col-md-6 col-sm-12 product"' + ' ' + 'dataFilterTarget='+ dataFilterTarget + ' ' + 'cartTarget=' + cartTarget + '>' + 
                  '<div class="grid-item">' +
                            '<div class="image product-img img-size">' +
                              '<img'+' '+'src' + '=' + product_image + ' ' + 'class="product-image" ' +  ' ' + '/>' +
                            '</div>'+  
                          '<div class="detail">'+
                            '<p class="product-title">'+ product_name +'<br>'+
                            '</p>'+
                            '<span class="product-price">'+ '$' + product_price + '</span>'+
                          '</div>'+
                          '<p class="star">'+
                              '<strong>&star;</strong>'+
                              '<strong>&star;</strong>'+
                              '<strong>&star;</strong>'+
                              '<strong>&star;</strong>'+
                              '<strong>&star;</strong>'+
                          '</p>'+
                          '<div class="card-footer content-flex">'+
                            '<i class="bx bx-cart add-cart add-to-cart btns" ' + ' ' + 'data-name=' + product_name +  ' ' + 'data-price=' + product_price +' ' + 'data-img=' + product_image + ' ' + 'id=' + idCart +'></i>' +
                            '<span class="cart-remove delete-item btns" ' + ' ' + 'data-name=' + product_name +  ' ' + 'added_target=' + added_to_cart + '>'+
                            '<i class="bx bxs-trash-alt"></i>'+
                            '</span>'+
                            '<p'+  ' ' + 'class="quick_viewLink btns"' +  ' ' + 'id='+ id + '>'+ 'view product' +'</p>' +
                          '</div>'+
                    '</div>' + 
                  '</li>';
  }).join('') + '</ul>';

//VIEWING_PRODUCTS

  let preveiwContainer = document.querySelector('#preveiwContainer');

preveiwContainer.innerHTML = '<ul class="products-preview">' + products.map(function ({ idCart, added_to_cart,  dataTarget, idPreview, idShow, product_name, product_size, product_color, product_price, product_image, product_desc, product_imageView1, product_imageView2, product_imageView3, product_imageView4}) {
return '<li' + ' ' + 'class="content-flex preview" ' + ' ' + 'data-target=' + dataTarget + ' ' + 'idPreview=' + idPreview + '>' +
          '<i class="Close pointer">X</i>' +
          '<ul class="contentPreview content-flex content-center">'+
              '<li class="imgVIEW-content content-flex content-center content-col">'+
                '<div class="main_image content-flex content-center"' + ' '  +'>'+
                  '<img src='+ product_image + ' ' + 'alt=' + product_name + ' ' +'class="product-image imgVIEW"' +  ' ' + 'title=' + dataTarget + ' ' + 'id='+ idPreview + ' ' + '/>'+
                '</div>'+
                '<ul class="thumb content-flex content-center">'+
                  '<li>'+'<img src=' + product_image + ' ' + 'data-target=' + dataTarget + ' ' + '>'+'</li>'+
                  '<li>'+'<img src=' + product_imageView1 + ' ' + 'data-target=' + dataTarget + ' ' + '>'+'</li>'+
                  '<li>'+'<img src=' + product_imageView2 + ' ' + 'data-target=' + dataTarget +' ' + '>'+'</li>'+
                  '<li>'+'<img src=' + product_imageView3 + ' ' + 'data-target=' + dataTarget + ' ' + '>'+'</li>'+
                  '<li>'+'<img src=' + product_imageView4 + ' ' + 'data-target=' + dataTarget + ' ' + '>'+'</li>'+
                '</ul>'+
              '</li>'+
              '<li class="desc-content content-flex content-center content-col">'+
                '<h3 class="product-title btns">name:'+ product_name +'</h3>'+
                '<h4 class="product-size btns">size:'+ product_size +'</h4>'+
                '<h5 class="product-color btns">color:'+ product_color +'</h5>'+
                '<h6 class="product-price btns">price:'+ '<small>'+'$</small>'+  product_price +'</h6>'+
                '<p class="btns">description:'+ product_desc +'</p>'+
                '<div class="viewIcons">'+
                  '<i class="bx bx-cart add-cart add-to-cart btns" ' + ' ' + 'data-name=' + product_name +  ' ' + 'data-price=' + product_price +' ' + 'data-img=' + product_image + ' ' + 'id=' + idCart +'></i>' +
                  '<span class="cart-remove delete-item btns" ' + ' ' + 'data-name=' + product_name +  ' ' + 'added_target=' + added_to_cart + '>'+
                    '<i class="bx bxs-trash-alt"></i>'+
                  '</span>'+
                '</div>'+  
              '</li>'+
          '</ul>'+
          '<!-- The Modal -->'+
              '<div id="myModal" class="modal content-center content-col" ' + ' ' + '>'+
                '<span class="closeView btns">&times;</span>'+
                '<img' + ' ' + 'class="modal-content"'+ ' ' +'idShow=' + idShow + ' ' + '/>'+
                '<div class="caption btns" id="caption">' + product_name + '</div>'+
            '</div>'+
        '</li>';
        
      }).join('') +                                        
      '</ul>';

      
      //Display_productsPreviewAll
const productsPreviewAll = ()=>{
    let productsPreview = document.querySelector('.preveiwContainer .products-preview');
  let previewBox = productsPreview.querySelectorAll('.preview');
    document.querySelectorAll('.product-container .quick_viewLink').forEach(quick_viewLink =>{
      quick_viewLink.onclick = () =>{
        productsPreview.classList.add('active');
        let name = quick_viewLink.getAttribute('id');
        previewBox.forEach(preview =>{
          let dataTarget = preview.getAttribute('data-target');
          if(name == dataTarget){
            preview.classList.add('active');
          };
        });
      };
    });
  
  
    //CLOSE_ProductsPreview
  previewBox.forEach(close =>{
    close.querySelector('.Close').onclick = () =>{
      close.classList.remove('active');
      productsPreview.classList.remove('active');
       previewBox.forEach(preview =>{
      preview.classList.remove('active');
      });
    };
  });
  
  // Get the modal
  
  let modalBoxs = document.querySelectorAll('.products-preview .modal');
  let modalImgs = document.querySelectorAll('.products-preview .modal-content');
  let productImages = productsPreview.querySelectorAll('.product-image');
  
  
  productImages.forEach(imgView =>{
    imgView.onclick = () =>{
    const imgViewTarget = imgView.getAttribute('id');
    modalBoxs.forEach(modalBox =>{
       modalBox.classList.add('active');
       modalImgs.forEach(modalImg =>{
          const dataTarget = modalImg.getAttribute('idShow');
          if(imgViewTarget == dataTarget){
             modalImg.src = imgView.src;
             modalImg.alt = imgView.alt;
      };
      });
    });
  };
  });
  
    // Get the <span> element that closeView the modal
    document.querySelectorAll('.products-preview .closeView').forEach(closeView =>{
    closeView.onclick = () =>{
        modalBoxs.forEach(modalBox =>{
        modalBox.classList.remove('active');
        modalImgs.forEach(modalImg =>{
            modalImg.classList.remove('active');
        });
      });
      }
      });
  
  //thumbImgs of View
  let thumbImgs = productsPreview.querySelectorAll('.preview .thumb li img');
  thumbImgs.forEach(thumbImg =>{
    thumbImg.onclick = () =>{
       const thumbImgTarget = thumbImg.getAttribute('data-target');
          productImages.forEach(productImage =>{
            let main_imageTitle = productImage.getAttribute('title');
             if(thumbImgTarget == main_imageTitle) {
              productImage.src = thumbImg.src;
              modalImgs.forEach(modalImg =>{
                const dataTarget = modalImg.getAttribute('idShow');
                if(dataTarget == main_imageTitle) {
                  thumbImg.src = modalImg.src
            }
          });
            }
        });
  };
  });
  }
  productsPreviewAll();