const {Product} = require('../product');

class Full extends Product {
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
    }


    actualPrice() {
        super.setSellIn();
        if (this.price >= 0) {
            const price = this.isValidatePrice + this.diff;
            this.price = price > Product.MAX_PRICE
                ? Product.MAX_PRICE
                : price;
        }
    }

    get isValidatePrice() {
        if (this.price > Product.MAX_PRICE) return Product.MAX_PRICE;
        if (this.price >= 0) return this.price;
        if (0 > this.price) return 0;
    }
    get diff() {
        return this.sellIn >= 0 ? 1 : 2;
    }

}

module.exports = Full;
