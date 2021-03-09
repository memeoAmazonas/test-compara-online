const {Product} = require('../product');

class Special extends Product {
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
    }

    /* istanbul ignore next */
    actualPrice() {

        if (this.diff > 0) {
            super.bodyConditionSpeciall(this.diff);

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
        /* istanbul ignore else */
        if (this.sellIn >= 0 && this.sellIn <= 5) return 3;
        /* istanbul ignore next */
        return 0;
    }

}

module.exports = Special;
