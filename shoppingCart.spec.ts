import {AddressDelivery, Cart, PickUpDelivery, Product} from "./shoppingCart"

it('should be false if cart is without products and delivery', () => {
    const cart = new Cart();
    expect(cart.checkout()).toBeFalsy();
});

it('should be false if cart is without products', () => {
    const cart = new Cart();
    cart.addDelivery(new PickUpDelivery(123));
    expect(cart.checkout()).toBeFalsy();
});

it('should be false if cart is without delivery', () => {
    const cart = new Cart();
    cart.addToCart(new Product(1, "Lorem", 1.99), 1);
    expect(cart.checkout()).toBeFalsy();
});

it('should be possible to add products and calculate total', () => {
    const cart = new Cart();
    cart.addToCart(new Product(1, "Lorem", 1), 1)
        .addToCart(new Product(1, "Lorem", 1), 1)
        .addToCart(new Product(2, "Ipsum", 3), 1);

    expect(cart.getTotal()).toBe(5);
});

it('should be possible to add products, then remove and calculate total', () => {
    const cart = new Cart();
    cart
        .addToCart(new Product(1, "Lorem", 1), 1)
        .addToCart(new Product(1, "Lorem", 1), 1)
        .addToCart(new Product(2, "Ipsum", 3), 1)
        .deleteFromCart(1);

    expect(cart.getTotal()).toBe(3);
});

it('should be true for cart with product and pick-up delivery', () => {
    const cart = new Cart();
    cart
        .addToCart(new Product(1, "Lorem", 1.99), 1)
        .addDelivery(new PickUpDelivery(123));

    expect(cart.checkout()).toBeTruthy();
});

it('should be true for cart with product and address delivery', () => {
    const cart = new Cart();
    cart
        .addToCart(new Product(1, "Lorem", 1.99), 1)
        .addDelivery(new AddressDelivery(new Date(), "6676 Nina Place Suite 686"));

    expect(cart.checkout()).toBeTruthy();
});

