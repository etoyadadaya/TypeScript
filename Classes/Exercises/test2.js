"use strict";
class ProductT2 {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getPrice() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error("No products in Cart!");
        }
        if (!this.delivery) {
            throw new Error("Delivery method not set!");
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new ProductT2(1, "Cookie", 10));
cart.addProduct(new ProductT2(2, "Cake", 20));
cart.addProduct(new ProductT2(3, "Chocolate", 5));
cart.deleteProduct(3);
cart.setDelivery(new HomeDelivery(new Date(), "Respect Street - rolled in"));
console.log(cart.getPrice());
console.log(cart.checkOut());
