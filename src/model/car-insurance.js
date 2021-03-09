class CarInsurance {
    constructor(products) {
        this.products = products;
    }

    updatePrice() {
        this.products.forEach((item) => item.actualPrice());
        return this.products;
    }
}

module.exports = CarInsurance;
