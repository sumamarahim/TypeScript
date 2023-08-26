/**

Task 1: Modeling Online Store Entities
0. You're building a TypeScript application for an online store.
 Define the following types and interfaces:
1. DONE: Define an interface Product with properties
like id, name, price, and category.
2. Create a type Cart that represents an array
of Product objects.
3. DONE: Define an interface Customer with properties
like id, name, and email.
4. Create a type Order that represents an object
containing a Customer and a Cart.
5. Implement a function that calculates the total
 price of products in the cart.
 */
import chalk from "chalk";
// Welcome msg
console.log(chalk.bgBlue("Welcome"));
// Function to calculate the total price of products in the cart
function calculateTotalPrice(cart) {
    // The 'cart' parameter is an array of 'Product' objects.
    // We use the 'reduce' function to iterate over each product in the cart
    // and accumulate the total price.
    const totalPrice = cart.reduce((total, product) => {
        // The 'total' parameter keeps track of the accumulated total.
        // The 'product' parameter represents the current product in the iteration.
        // We add the price of the current product to the total.
        // 'product.price' is the price of the current product.
        return total + product.price;
        // The initial value of 'total' is set to 0 in the 'reduce' function.
    }, 0);
    // After iterating over all products in the cart, the final total is returned.
    return totalPrice;
    // The reduce function is a powerful tool for 
    // aggregating values in an array,
    //  and it's commonly used for calculations like this one.
}
// Example usage
const products = [
    { id: 1, name: "Product 1", price: 10, category: "Category A" },
    { id: 2, name: "Product 2", price: 20, category: "Category B" },
    { id: 3, name: "Product 3", price: 15, category: "Category A" },
];
const customer = { id: 1, name: "Ali", email: "info@sumahim.com" };
const order = { customer, cart: products };
const totalPrice = calculateTotalPrice(order.cart);
console.log("Customer ", customer.name, " using email ", customer.email, " have Total Price:", totalPrice, " for products: ", products);
