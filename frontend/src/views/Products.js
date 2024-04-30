const Products = {
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
    <!-- SECTION_PRODUCT-->
    <section class="allProducts">
        <div class="content-flex content-center content-col">
            <div class="content-flex content-center content-col">
                <div class="hero-body">
                    <p class="title">
                        All Products
                    </p>
                    <p class="subtitle">
                        shopping the best products superhero Panda
                    </p>
                </div>
                <div class="hero-footer">
                    <label for="searchProductbox" class="is-size-5">Search</label>
                    <input class='input mb-5 searchProductbox' type="search" id="searchProductbox" placeholder="search products.." onkeyup="searchProducts()">
                </div>
            </div>
            <div class="section content-flex content-center content-col">
                <div class="nav__link__productsShop selects btns content-flex content-center" id="FiltersLink">
                    <h3>Filters<i class='bx bx-filter-alt'></i></h3>
                    <span><i class='bx bx-chevron-right arrow'></i></span>
                </div>
                <div class="filterMenu" id="filterMenu">
                    <ul class="filterMenuInner" id="filterMenuInner">
                        <li class="btns link" data-filter="all">All</li>
                        <li><a id="quilt">Quilt</a> <i class='bx bx-chevron-right arrow'></i>
                            <!-- dropdown-content -->
                            <div class="dropdown-content">
                                <ul class="content">
                                    <li class="btns link" data-filter="Printed_cotton_quilt">Printed cotton quilt</li>
                                    <li class="btns link" data-filter="Cotton_stripe_quilt">Cotton stripe quilt</li>
                                    <li class="btns link" data-filter="Plush_cotton_quilt">Plush cotton quilt</li>
                                    <li class="btns link" data-filter="Plush_stripe_comforter">Plush stripe comforter</li>
                                    <li class="btns link" data-filter="Plain_velor_comforter">Plain velor comforter</li>
                                    <li class="btns link" data-filter="Printed_Plush_comforter">Printed Plush comforter</li>
                                </ul>
                            </div>
                        </li>
                        <li><a id="blanket">Blanket</a><i class='bx bx-chevron-right arrow'></i>
                            <!-- dropdown-content -->
                            <div class="dropdown-content">
                                <ul class="content">
                                    <li class="btns link" data-filter="MORA_SPANIEL_BLANKET">Mora Spaniel Blanket</li>
                                    <li class="btns link" data-filter="EGYPTIAN_MURANO_BLANKET">Egyptian Murano blanket</li>
                                    <li class="btns link" data-filter="TURKISH_BLANKET">Turkish blanket</li>
                                </ul>
                            </div>
                        </li>
                        <li><a id="sheet">sheets</a><i class='bx bx-chevron-right arrow'></i>
                            <!-- dropdown-content -->
                            <div class="dropdown-content">
                                <ul class="content">
                                    <li class="btns link" data-filter="PLAIN_COTTON_SHEET">Plain cotton sheet</li>
                                    <li class="btns link" data-filter="COTTON_STRIPE_SHEET">Cotton stripe sheet</li>
                                    <li class="btns link" data-filter="JACQUARD_COTTON_SHEET">Jacquard cotton sheet</li>
                                    <li class="btns link" data-filter="PRINTED_COTTON_SHEET">Printed cotton sheet</li>
                                </ul>
                            </div>
                        </li>
                        <li><a id="Coverta">Coverta</a><i class='bx bx-chevron-right arrow'></i>
                            <!-- dropdown-content -->
                            <div class="dropdown-content">
                                <ul class="content">
                                    <li class="btns link" data-filter="PLAIN_COTTON_COVERTA">Plain cotton Coverta</li>
                                    <li class="btns link" data-filter="Capotonian_COTTON_STRIPE_COVERTA">Cotton stripe Coverta</li>
                                </ul>
                            </div>
                        </li>
                        <li class="btns link" data-filter="PILLOW_AND_CUSHION">Pillow and cushion</li>
                        <li class="btns link" data-filter="bathrobes">bathrobes</li>
                        <li class="btns link" data-filter="Towels">Towels</li>
                    </ul>
                </div>
            </div>
            <!--Products-->
            <div class="sectionProducts" id="sectionProducts">
                <ul class="row grid-container product-container" id="product-container">
                    ${products.dataProductsItems.map(
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
export default Products;