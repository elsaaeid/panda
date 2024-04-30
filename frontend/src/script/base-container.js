//HEADER
let Header = `
        <div class="header-content content-align-item">
            <a href="/#/" class="logo btns">Panda Textile</a>
              <!-- Nav -->
              <nav class="content-flex content-evenly">
                   <ul class="navigation content-flex content-evenly content-align-item main-padding">
                    <li class="nav__link nav__link-home"><a class="btns" href="/#/"><i class='bx bxs-home'></i>Home</a></li>
                    <li id="sectionLink" title="shows">
                        <a href="/#/shows" class="nav__link btns"><i class='bx bxs-purchase-tag-alt'></i>Shows</a>
                     </li>
                     <li id="sectionLink" title="Products">
                        <a href="/#/products" class="nav__link btns" data-link><i class='bx bxs-package' ></i>Products</a>
                    </li>
                     </ul>
                      <ul class="content-flex content-align-item content-evenly">
                        <li title="cart">
                        <form action="#">
                         <a href="/#/cart" class="nav-link-hover" data-toggle="modal">
                            <sup><span class="total-count"></span></sup>
                            <i class='bx bx-cart cart-icon' id="cart-icon"></i>
                         </a>
                         </form>      
                        </li>
                        <li title="clear-cart">
                            <a class="nav-link-hover clear-cart">
                                <i class="bx bxs-trash-alt"></i>
                            </a>
                        </li>
                        <li class="search" title="search">
                            <i class='bx bx-search searchBtn' id="iconSearch"></i>
                        </li>
                        <li>
                            <i class='bx bxs-sun' id="light" title="light"></i>
                            <i class='bx bxs-moon' id="dark" title="dark"></i>
                        </li>
                    </ul>
                <div class="menuToggle pointer"><i class='bx bx-bar-chart' title="menu"></i></div>
                <div class="searchBox" title="search"> 
                    <input type="search" class="form-control" id="searchProductbox" placeholder="search products.." autocomplete="off" onkeyup="searchProducts()" aria-describedby="button-search" />
                    <i class='bx bx-x btns closeBtn' id="iconClose" title="close searchmenu"></i>
                </div>
                <!-- Cart model --> 
                <!-- Cart -->   
                  <div class="cart" id="cart">
                     <h2 class="cart-title btns" id="cart-title">Cart</h2>
                     <p id="cartTest"></p>
                     <!-- Content -->
                        <table class="show-cart table"></table>
                     <!-- Total -->
                     <div class="btns">Total price: $<span class="total-cart"></span></div>
                     <!-- Buy Button-->
                     <button type="button" class="btn-buy btns" id="btn-buy">Buy Now</button>
                     <!-- Cart Close-->
                     <i class='bx bx-x btns' id="close-cart" title="close-cart"></i>
                  </div>
              </nav>
        </div>
        <div class="progress-bar-container"><div id="progress-bar"></div></div>
`;
document.getElementById("header").innerHTML = Header;

//FOOTER
let Footer = `
<div class="top-footer">
            <div class="media-links">
                <h3 class="font-bold">Contacts</h3>
                <div class="content-flex flex-row content-around">
                    <a href="#" class="media-link icon btns padding-right padding-top"><ion-icon name="logo-facebook" class="icon-size"></ion-icon></a>
                    <a href="#" class="media-link icon btns padding-right padding-top"><ion-icon name="logo-twitter" class="icon-size"></ion-icon></a>
                    <a href="#" class="media-link icon btns padding-right padding-top"><ion-icon name="logo-instagram" class="icon-size"></ion-icon></a>
                    <a href="#" class="media-link icon btns padding-right padding-top"><ion-icon name="logo-linkedin" class="icon-size"></ion-icon></a>
                </div>
            </div>
            <div class="desc-footer">
                <h3 class="font-bold">about Panda Textile</h3>
                <p class=" padding-top">it's company where itself field is Textile industry</p>
            </div>
</div>
<div class="bottom-footer content-flex content-center padding-top"><p>copyrights is saved under name Panda Textile</p></div>
`;
document.getElementById("footer").innerHTML = Footer;