const {Product} = require('../product');

class SuperI extends Product {
    constructor(name, sellIn, price) {
        super(name, sellIn, price);

    }
    get diff() {
        return this.sellIn > 0 ? 2 : 4;
    }
}
module.exports=SuperI;
