// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];
    
    // Constructor
    function Item(name, price, img, count) {
      this.name = name;
      this.price = price;
      this.img = img;
      this.count = count;
    }
    
    // Save cart
    function saveCart() {
      sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }
    
      // Load cart
    function loadCart() {
      cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
      loadCart();
    }
    
  
    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};
    
    // Add to cart
    obj.addItemToCart = function(name, price, img, count) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count ++;
          saveCart();
          return;
        }
      }
      var item = new Item(name, price, img, count);
      cart.push(item);
      saveCart();
    }
    // Set count from item
    obj.setCountForItem = function(name, count) {
      for(var i in cart) {
        if (cart[i].name === name) {
          cart[i].count = count;
          break;
        }
      }
    };
    // Remove item from cart
    obj.removeItemFromCart = function(name) {
        for(var item in cart) {
          if(cart[item].name === name) {
            cart[item].count --;
            if(cart[item].count === 0) {
              cart.splice(item, 1);
            }
            break;
          }
      }
      saveCart();
    }
  
    // Remove all items from cart
    obj.removeItemFromCartAll = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart.splice(item, 1);
          break;
        }
      }
      saveCart();
    }
  
    // Clear cart
    obj.clearCart = function() {
      cart = [];
      saveCart();
    }
  
    // Count cart 
    obj.totalCount = function() {
      var totalCount = 0;
      for(var item in cart) {
        totalCount += cart[item].count;
      }
      return totalCount;
    }
  
    // Total cart
    obj.totalCart = function() {
      var totalCart = 0;
      for(var item in cart) {
        totalCart += cart[item].price * cart[item].count;
      }
      return Number(totalCart.toFixed(2));
    }
  
    // List cart
    obj.listCart = function() {
      var cartCopy = [];
      for(i in cart) {
        item = cart[i];
        itemCopy = {};
        for(p in item) {
          itemCopy[p] = item[p];
  
        }
        itemCopy.total = Number(item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy)
      }
      return cartCopy;
    }
  
    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
  })();
  
  
  // *****************************************
  // Triggers / Events
  // ***************************************** 
  // Add item
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, img, 1);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    $('.clear-cart').css("display", "none");
    shoppingCart.clearCart();
    displayCart();
     $('.add-to-cart').each(function() {
            $(this).show();
          });
    $('.cart-remove').each(function() {
            $(this).hide();
          });
  });
  
  //displayCart
  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
      output += "<tr>"
        + "<td>" + cartArray[i].name + "(" + cartArray[i].price + ")</td>" 
        + "<td>" + '<img'+' '+'src' + '=' + cartArray[i].img + ' ' + 'class="cart-img" ' +  ' ' + ' />'  + "</td>"
        + "</tr>"
        +"<tr>"
        + "<td><div class='input-group'><button class='minus-item btn' data-name=" + cartArray[i].name + ">-</button>"
        + "<input name='count' type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item btn' data-name=" + cartArray[i].name + ">+</button></div></td>"
        +"</tr>"
        +"<tr>"
        + "<td><button class='delete-item btn' data-name=" + cartArray[i].name + "><i class='bx bxs-trash-alt btn'></i></button></td>"
        + "<td>" + cartArray[i].total + "</td>" 
        +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
    $('.add-to-cart').each(function() {
            $(this).show();
          });
    $('.cart-remove').each(function() {
            $(this).hide();
          });
  })
  

    $('.product').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  });

 $('.preview').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })


  //Buy_Btn
    $('.cart').on("click", ".btn-buy", function(event) {
      $('.clear-cart').css("display", "none");
          var value_input = $("input[name*='count']").val();

      if (value_input == 0 ) {
       $(".alert").css("display", "block");
       $(".alertContent").html("Unfortunately, the cart is empty");
      }  else if (value_input > 0) {
         $(".alert.success").css("display", "block");
       $(".alertContent").html("successfully, the order has been requested");
       $('.product .add-to-cart').each(function(event) {
            $(this).show();
          });
        $('.product .cart-remove').each(function(event) {
            $(this).hide();
          });
        $('.preview .add-to-cart').each(function(event) {
            $(this).show();
          });
        $('.preview .cart-remove').each(function(event) {
            $(this).hide();
          });
       shoppingCart.removeItemFromCartAll(name);
       shoppingCart.clearCart();
              displayCart();
      }

      })

   $('.alert').on("click", ".closebtnAlert", function() {
    $("#alertForCart").css("display", "none");
      })

  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();
  


