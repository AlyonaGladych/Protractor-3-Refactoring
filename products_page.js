let HeaderPage = require("./header_page.js");

let addProdLinkLocator = "a.section-body_actions";


class ProductsPage {
    constructor() {
        this.header = new HeaderPage();
    }

    getAddProduct() {
        return element(by.css(addProdLinkLocator));
    }  
}



module.exports = ProductsPage;
