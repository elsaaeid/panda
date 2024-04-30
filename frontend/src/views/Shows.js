 const Shows = {
    render: async() => {
        const response = await fetch("http://localhost:5000/api/products", {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(!response || !response.ok) {
            return `<div>Error in getting data</div>`;
        } 
        const products = await response.json();
    return `
    <section>
        <div class="row showsContent content-flex content-center padding">
            <div class="col-lg-6 col-md-6 col-sm-12 intro-text padding">
                <h1>
                <span class="see">have the shows today with</span>
                <span class="connecting">Panda</span>
                </h1>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 i-frame content-flex content-center content-col">
                <div class="product-image slide-img img-show img-size">
                  <img src="../../images/sale.png" class="product-image" />
                </div> 
            </div>
        </div>
    </section>
        <!-- Top Sale -->
    <section id="top-sale">
        <div class="container py-5">
            <h4 class="font-rubik font-size-20">Top Sale</h4>
            <hr>
            <!-- owl slider -->
            <div class="slider-container" id="slider-container">
                <ul class="owl-carousel owl-theme slider_container">
                    ${products.dataSlider.map(
                        (product) => `
                        <li class="item product" dataFilterTarget="${product.dataFilterTarget}" cartTarget="${product.cartTarget}"> 
                            <div class="grid-item">
                                <div class="image product-img slide-img img-size">
                                    <img src="${product.product_image}" class="product-image" />
                                    <a href="/#/product/${product.id}">Shop Now</a>
                                </div>
                                <div class="detail">
                                    <p class="product-title">${product.product_name}</p>
                                    <span class="product-price">$ ${product.product_price}</span>
                                </div>
                                <div class="card-footer content-flex">
                                <i class="bx bx-cart add-cart add-to-cart btns" id="${product.idCart}"></i>
                                <span class="cart-remove delete-item btns" added_target="${product.added_to_cart}">
                                <i class="bx bxs-trash-alt"></i>
                                </span>
                                <p class="quick_viewLink_carousel btns" id="${product.id}"> view product</p>
                                </div>
                            </div> 
                        </li>
                        `
                    ).join('\n')}
                </ul>
            </div>
            <!-- !owl slider -->
        </div>
    </section>
    <!--Top Sale -->
<section class="latest_shows">
<div class="content-flex content-center content-col">
    <div class="nav__link__products_shows  top-margin margin-bottom pointer content-flex content-center" id="nav__link__products_shows">
        <h1>THE LATEST SHOWS</h1>
    </div>
    <!--Products-->
            <div class="sectionProducts" id="sectionProducts">
                <ul class="row grid-container product-container" id="product-container">
                    ${products.dataLatestShows.map(
                        (product) => `
                        <li class="col-lg-3 col-md-6 col-sm-12 box" dataFilterTarget="${product.dataFilterTarget}" cartTarget="${product.cartTarget}"> 
                            <div class="grid-item">
                                <div class="image product-img slide-img img-size">
                                    <img src="${product.product_image}" class="product-image" />
                                    <a href="/#/product/${product._id}">Shop Now</a>
                                </div>
                            <div class="detail">
                                <p class="product-title">${product.product_name}</p>
                                <span class="product-price">$ ${product.product_price}</span>
                            </div>
                            <div class="stars-container">
                                <p class="star">
                                    <strong>&star;</strong>
                                    <strong>&star;</strong>
                                    <strong>&star;</strong>
                                    <strong>&star;</strong>
                                    <strong>&star;</strong>
                                </p>
                            </div>
                            <div class="card-footer content-flex">
                            <i class="bx bx-cart add-cart add-to-cart btns" id="${product.idCart}"></i>
                            <span class="cart-remove delete-item btns" added_target="${product.added_to_cart}">
                            <i class="bx bxs-trash-alt"></i>
                            </span>
                            <p class="quick_viewLink_carousel btns" id="${product.id}"> view product</p>
                            </div>
                            </div> 
                        </li>
                        `
                    ).join('\n')}
                </ul>
                <!-- PAGINATION -->
                <div class="pagination">
                    <a href="#"><div><i class='bx bx-chevron-left'></i></div></a>
                    <a href="#"><div>1</div></a>
                    <a href="#"><div>2</div></a>
                    <a href="#"><div>3</div></a>
                    <a href="#"><div><i class='bx bx-chevron-right'></i></div></a>
                </div>
            </div>
</div>
</section>
    `;
    },
};
export default Shows;