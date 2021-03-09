const {Product} = require('../product');

class Full extends Product {
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
    }

    actualPrice() {
        super.setSellIn();
        super.bodyConditionSpeciall();
    }

    /* istanbul ignore next */
    get isValidatePrice() {
        if (this.price > Product.MAX_PRICE) return Product.MAX_PRICE;
        if (this.price >= 0) return this.price;
        return 0;
    }

    /* istanbul ignore next */
    get diff() {
        return this.sellIn >= 0 ? 1 : 2;
    }

}

module.exports = Full;
