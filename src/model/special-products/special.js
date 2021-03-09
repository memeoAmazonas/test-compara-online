const {Product} = require('../product');

class Special extends Product {
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
    }

    actualPrice() {

        if (this.diff > 0) {
            if (this.price >= 0) {
                const price = this.isValidatePrice + this.diff;
                this.price = price > Product.MAX_PRICE
                    ? Product.MAX_PRICE
                    : price;
            }

            super.setSellIn();
        } else {
            this.price = 0;
            super.setSellIn();
        }
        if (this.sellIn < 0) this.price = 0;
    }

    get diff() {
        if (this.sellIn > 10) return 1;
        if (this.sellIn > 5 && this.sellIn <= 10) return 2;
        if (this.sellIn >= 0 && this.sellIn <= 5) return 3;
        return 0;
    }

}

module.exports = Special;