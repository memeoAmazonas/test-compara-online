class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    static MAX_PRICE = 50;

    actualPrice() {
        if (this.priceGreaterZero) {
            this.price = this.isValidatePrice - this.diff;
        }
        this.setSellIn();
    }

    setSellIn() {
        this.sellIn -= 1;
    }

    get isValidatePrice() {
        if (this.price > Product.MAX_PRICE) return Product.MAX_PRICE;
        if (0 > this.price) return 0;
        if (this.price > 0) return this.price;

    }

    get priceGreaterZero() {
        return (this.price - 1) > 0
    }

    get diff() {
        return this.sellIn > 0 ? 1 : 2;
    }
}


module.exports = {Product};
