class CarInsurance {
    constructor(products) {
        this.products = products;
    }

    updatePrice() {
        this.products.forEach((item) => {
            if (item.name !=='Mega Coverage') item.actualPrice()
        });
        return this.products;
    }
}

module.exports = CarInsurance;
