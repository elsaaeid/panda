
const Home = {
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
    <!-- carousel -->
    <section id="carousel" class="content-flex content-center padding-top">
        <div class="container-fluid" id="banner-area">
            <ul class="owl-carousel owl-theme grid-container product-container">
                ${products.dataCarousel.map(
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
    </section>
    <section>
        <div class="row shows content-flex content-center padding">
            <div class="col-lg-6 col-md-6 col-sm-12 intro-text padding">
            <h1>
                <span class="see"> You can see more about the shows </span>
                <span class="connecting"> Connecting</span>
            </h1>
            <p>
                An online streaming platform for boxing matches <br />
                We also dedicate some special time to throwbacks cuz old is gold
            </p>
            <a class="btn show" href="/shows" data-link>Show More</a>
            <a class="btn shop" href="/shop" data-link>Shop Now</a>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 i-frame padding content-flex content-center content-col">
            <div class="tv-image"></div>
            <div class="content-flex content-center">
                <div class="stand-1"></div>
                <div class="stand-2"></div>
            </div>
            </div>
        </div>
    </section>
    <section class="latest_product">
        <div class="content-flex content-center content-col">
            <div class="nav__link__home_products margin-bottom content-flex content-center" id="nav__link__home_products">
                <h1>THE LATEST PRODUCTS</h1>
            </div>
            <!--Products-->
            <div class="sectionProducts" id="sectionProducts">
                <ul class="row grid-container product-container" id="product-container">
                    ${products.dataLatest.map(
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
export default Home;