abstract class DeliveryItem {
    items: DeliveryItem[] = [];

    // adding item in cart logic
    addItem(item: DeliveryItem) {
        this.items.push(item);
    }

    // get cart price logic
    getItemPrices(): number {
        return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0);
    }

    abstract getPrice(): number;
}

// delivery shop class
class DeliveryShop extends DeliveryItem {
    constructor(private deliveryFee: number) {
        super();
    }

    getPrice(): number {
        return this.getItemPrices() + this.deliveryFee;
    }
}

// package class
class Package extends DeliveryItem {
    getPrice(): number {
        return this.getItemPrices();
    }
}

// product class
class Product extends DeliveryItem {
    constructor(private price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

// creating shop and setting delivery fee
const shop = new DeliveryShop(100);
// adding new product with price: 1000
shop.addItem(new Product(1000));

// creating package for new order which includes: 2 products with 200 and 300 prices
const pack1 = new Package();
pack1.addItem(new Product(200));
pack1.addItem(new Product(300));
// adding first package to cart
shop.addItem(pack1);

// creating package for another order which includes only one product with price: 500
const pack2 = new Package();
pack2.addItem(new Product(500));
// adding second package to cart
shop.addItem(pack2);

// get sum of cart
console.log(shop.getPrice()); // [LOG]: 2100
