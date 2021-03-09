class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    static MAX_PRICE = 50;

    actualPrice() {
        /* istanbul ignore else */
        if (this.priceGreaterZero) this.price = this.isValidatePrice - this.diff;
        this.setSellIn();
    }

    setSellIn() {
        this.sellIn -= 1;
    }

    /* istanbul ignore next */
    get isValidatePrice() {
        if (this.price > Product.MAX_PRICE) return Product.MAX_PRICE;
        if (0 > this.price) return 0;
        return this.price;
    }

    get priceGreaterZero() {
        return (this.price - 1) > 0
    }

    bodyConditionSpeciall(diference=this.diff){
        /* istanbul ignore else */
        if (this.price >= 0) {
            const price = this.isValidatePrice + diference;
            this.price = price > Product.MAX_PRICE
                ? Product.MAX_PRICE
                : price;
        }
    }

    /* istanbul ignore next */
    get diff() {
        if (this.name === 'Super Sale') {
            return this.sellIn > 0 ? 2 : 4;
        }
        return this.sellIn > 0 ? 1 : 2;
    }
}


module.exports = {Product};
