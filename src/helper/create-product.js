const {Product } = require('../model/product');
const {Full, Special } = require('../model/special-products');
const types = {
    "Full Coverage": (name, sellIn, price) => new Full(name, sellIn, price),
    "Special Full Coverage": (name, sellIn, price) => new Special(name, sellIn, price),
}

const createProduct = (name, sellIn, price) => {
    if (types[name]) return types[name](name, sellIn, price);
    return new Product(name, sellIn, price);
}
module.exports = createProduct;
