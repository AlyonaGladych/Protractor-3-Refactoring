let HeaderPage = require("./header_page.js");

let addProdLinkLocator = "a.section-body_actions";

//body > app > main > administration > div.container > div > div > projects > div > div.section > div.section__left > div:nth-child(3) > div > div > a > span:nth-child(2)

class ProductsPage {
    constructor() {
        this.header = new HeaderPage();
    }

    getAddProduct() {
        return element(by.css(addProdLinkLocator));
    }  
}



module.exports = ProductsPage;
