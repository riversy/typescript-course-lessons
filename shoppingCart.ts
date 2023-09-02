export class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export class CartItem {
    productId: number;
    qty: number;
    price: number;

    constructor(productId: number, qty: number, price: number) {
        this.productId = productId;
        this.qty = qty;
        this.price = price;
    }
}

abstract class AbstractDelivery {
    deliveryDate: Date

    protected constructor(deliveryDate: Date) {
        this.deliveryDate = deliveryDate;
    }
}

export class PickUpDelivery extends AbstractDelivery {
    shopId: number

    constructor(shopId: number) {
        super(new Date());
        this.shopId = shopId;
    }
}

export class AddressDelivery extends AbstractDelivery {
    address: string

    constructor(deliveryDate: Date, address: string) {
        super(deliveryDate);
        this.address = address;
    }
}

export class Cart {
    private items: Array<CartItem> = []
    private delivery: AbstractDelivery

    addToCart(product: Product, qty: number): this {
        const productId = product.id;

        const indexToUpdate = this.items.findIndex(ci => ci.productId === productId);
        if (indexToUpdate !== -1) {
            this.items[indexToUpdate].qty += qty;
        } else {
            this.items.push(
                new CartItem(productId, qty, product.price)
            );
        }

        return this;
    }

    deleteFromCart(productId: number): this {
        const indexToRemove = this.items.findIndex(ci => ci.productId === productId)
        if (indexToRemove === -1) {
            return this;
        }

        this.items.splice(indexToRemove, 1);

        return this;
    }

    getTotal(): number {
        let sum = 0;
        for (let item of this.items) {
            sum += item.price * item.qty;
        }
        return sum;
    }

    addDelivery(delivery: AbstractDelivery): this {
        this.delivery = delivery;
        return this;
    }

    checkout(): boolean {
        if (this.getTotal() === 0) {
            return false;
        }

        if (this.delivery === undefined) {
            return false;
        }

        return true;
    }
}


