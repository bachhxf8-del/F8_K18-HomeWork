const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

const orders = [];
let orderId = 1;

// Create Order
const createOrder = (productId, orderQuantity) => {
    // Validation
    if(productId === null || orderQuantity === null || orderQuantity <= 0) {
        return "Error";
    }

    // get product from productId
    const product = products.find((product) => product.id === productId);
    if(!product) return "Product not found";
    if (product.remaining < orderQuantity) {
        return "Out of stock";
    }

    // Add to order
    product.remaining = product.remaining - orderQuantity;
    const newOrder = {
        id: orderId++,
        productId: productId,
        quantity: orderQuantity,
    }
    orders.push(newOrder);
}
createOrder(2, 2);
console.log(products);
// [
//     ...
//     { id: 2, name: 'Dầu ăn Simply (1L)', price: 65000, remaining: 13 },
//     ...
// ]

console.log(orders);
// [ { id: 1, productId: 2, quantity: 2 } ]

// Update Order
const updateOrder = (orderId, quantity) => {
    const order = orders.find((order) => order.id === orderId);
    if(!order) return "Not found";

    const product = products.find((product) => product.id === order.productId);

    // Calculate the difference between the new and old remaining balances.
    const delta = quantity - order.quantity;


    if(delta > product.remaining) return "Out of stock";
    if(delta <= product.remaining) {
        product.remaining = product.remaining - delta;
        order.quantity = quantity;
    }
}
updateOrder(1, 1);
console.log(products);
// [
//      ...
//     { id: 2, name: 'Dầu ăn Simply (1L)', price: 65000, remaining: 14 },
//     ...
// ]
console.log(orders);
// [ { id: 1, productId: 2, quantity: 1 } ]


// Delete Order
const deleteOrder = (orderId) => {
    const order = orders.find((order) => order.id === orderId);
    if(!order) return "Not found";

    const product = products.find((product) => product.id === order.productId);

    // Delete and return the product quantity to product.remaining
    orders.splice(orders.indexOf(order), 1);
    product.remaining += order.quantity;
}

deleteOrder(1);
console.log(orders);
// []
console.log(products);
// [
//      ...
//     { id: 2, name: 'Dầu ăn Simply (1L)', price: 65000, remaining: 15 },
//     ...
// ]