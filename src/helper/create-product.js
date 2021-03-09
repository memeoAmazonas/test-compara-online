const {Product } = require('../model/product');
const {Full, Mega, Special, SuperI} = require('../model/special-products');
const types = {
    "Full Coverage": (name, sellIn, price) => new Full(name, sellIn, price),
    "Mega Coverage": (name, sellIn, price) => new Mega(name, sellIn, price),
    "Special Full Coverage": (name, sellIn, price) => new Special(name, sellIn, price),
    "Super Sale": (name, sellIn, price) => new SuperI(name, sellIn, price),
}

const createProduct = (name, sellIn, price) => {
    if (types[name]) return types[name](name, sellIn, price);
    return new Product(name, sellIn, price);
}
module.exports = createProduct;
