const {Product} = require('../product');
class Mega extends Product{
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
    };

    actualPrice() {}
}
module.exports = Mega;
