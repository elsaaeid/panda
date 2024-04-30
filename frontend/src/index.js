import Home from "./views/Home.js";
import Shows from "./views/Shows.js";
import Products from "./views/Products.js";
import Product from "./views/Product.js";
import Error404Views from "./views/Error404Views.js";
import { parseRequestUrl } from "./utils.js";


const routes = {
    "/": Home,
    "/shows": Shows,
    "/products": Products,
    "/product/:id": Product,
}
const router = async() => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/') +
    (request.id? '/:id': '') +
    (request.verb ? `/${request.verb}`: '');
    const viewsError = routes[parseUrl]? routes[parseUrl]: Error404Views;
    const main = document.getElementById("main-container");
    main.innerHTML = await viewsError.render();
};
window.addEventListener("load", router);
window.addEventListener("hashchange", router);