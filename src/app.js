'use strict';

const createProduct = require('./helper/create-product');
const CarInsurance = require('./model/car-insurance');
const DEFAULT_DATA = require('./model/data');
const productsAtDayZero = DEFAULT_DATA.map((item)=> createProduct(item.name, item.sellIn, item.price));
const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = (product) => {
    console.log(product.name, product.sellIn, product.price);
};
console.log(`Day ${0}`);
console.log('name, sellIn, price');
productsAtDayZero.forEach(productPrinter);
console.log('\n');
for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);

    //carInsurance.upda();
    console.log('');
}
