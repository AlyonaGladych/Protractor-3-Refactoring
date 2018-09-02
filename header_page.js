let productsMenuLocator = "#navbar > ul > li:nth-child(1) > a";
let administrationMenuLocator = "##navbar > ul > li:nth-child(2) > a";

class HeaderPage {
    constructor() {}

    getProductsMenu() {
        return element(by.css(productsMenuLocator));
    }

    getAdministrationMenu() {
        return element(by.css(administrationMenuLocator));
    }
    
    async isHeaderVisible() {
        return await this.getProductsMenu().isDisplayed() 
        && await this.getAdministrationMenu().isDisplayed();
    }
}



module.exports = HeaderPage;
