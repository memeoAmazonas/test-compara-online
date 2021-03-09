const expect = require('chai').expect;
const createProduct = require('../src/helper/create-product');
const DEFAULT_DATA = require('../src/model/data');
const list = DEFAULT_DATA.map((item) => createProduct(item.name, item.sellIn, item.price));
const CarInsurance = require('../src/model/car-insurance');
const { Product } = require('../src/model/product');

const TEST_DATA = [
    [
        {name: 'Medium Coverage', sellIn: 9, price: 19},
        {name: 'Full Coverage', sellIn: 1, price: 1},
        {name: 'Low Coverage', sellIn: 4, price: 6},
        {name: 'Mega Coverage', sellIn: 0, price: 80},
        {name: 'Mega Coverage', sellIn: -1, price: 80},
        {name: 'Special Full Coverage', sellIn: 14, price: 21},
        {name: 'Special Full Coverage', sellIn: 9, price: 50},
        {name: 'Special Full Coverage', sellIn: 4, price: 50},
        {name: 'Super Sale', sellIn: 2, price: 4},
    ],
    [
        {name: 'Medium Coverage', sellIn: 8, price: 18},
        {name: 'Full Coverage', sellIn: 0, price: 2},
        {name: 'Low Coverage', sellIn: 3, price: 5},
        {name: 'Mega Coverage', sellIn: 0, price: 80},
        {name: 'Mega Coverage', sellIn: -1, price: 80},
        {name: 'Special Full Coverage', sellIn: 13, price: 22},
        {name: 'Special Full Coverage', sellIn: 8, price: 50},
        {name: 'Special Full Coverage', sellIn: 3, price: 50},
        {name: 'Super Sale', sellIn: 1, price: 2},
    ],
]


describe("create-product", function () {
    list.forEach((item, index) => {
        const {name, sellIn, price} = item;
        it(`should return Create ${name} Product`, function () {
            expect(name).eql(DEFAULT_DATA[index].name);
            expect(sellIn).eql(DEFAULT_DATA[index].sellIn);
            expect(price).eql(DEFAULT_DATA[index].price);
        });
    })
});

describe("car-insurance", function () {

    it('should object as instance of CarInsurance', function () {
        const car = new CarInsurance(list);
        expect(car).to.be.instanceOf(CarInsurance);
    });

    it('should Car insurance calculations ', function () {
        for (let test of TEST_DATA){
            const {name, sellIn, price} = test;
            const car = new CarInsurance(list);
            car.updatePrice().map((item, index)=> {
                expect(item).to.eql(test[index]);
            })
        }
    });
});
