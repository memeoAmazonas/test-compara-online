'use strict';

const createProduct = require('./helper/create-product');
const CarInsurance = require('./model/car-insurance');
const DEFAULT_DATA = require('./data/data');
const fs = require('fs');
const app =() => {
    const productsAtDayZero = DEFAULT_DATA.map((item) => createProduct(item.name, item.sellIn, item.price));

    const carInsurance = new CarInsurance(productsAtDayZero);
    let exit = 'Day 0\n';

    const productPrinter = (product) => {
        exit += `${product.name}, ${product.sellIn}, ${product.price}\n`;
        console.log(product.name, product.sellIn, product.price);
    }

    console.log(`Day ${0}`);
    console.log('name, sellIn, price');
    productsAtDayZero.forEach(productPrinter);
    console.log('\n');
    for (let i = 1; i <= 30; i += 1) {

        console.log(`Day ${i}`);
        exit += `\nDay ${i}\n`;
        console.log('name, sellIn, price');
        exit += 'name, sellIn, price\n';
        carInsurance.updatePrice().forEach(productPrinter);
        console.log('');
        exit += '\n';
    }
    try {
        fs.writeFileSync('./src/data/after-30-days.json', exit);
    } catch (e) {
        console.log("Error creando el archivo");
    }

}
app();

