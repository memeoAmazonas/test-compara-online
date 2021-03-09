const expect = require('chai').expect;
const createProduct = require('../src/helper/create-product');
const DEFAULT_DATA = require('../src/data/data');
const list = DEFAULT_DATA.map((item) => createProduct(item.name, item.sellIn, item.price));
const CarInsurance = require('../src/model/car-insurance');
const TEST_DATA = require('../src/data/data-test');

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

    let car, day = 1;
    for (let test of TEST_DATA) {
         car = new CarInsurance(list);
        it(`Car insurance calculations day: ${day}`, function () {
            car.updatePrice().map((item, index) =>expect(item).to.eql(test[index]));
        });
        day ++;
    }
});

