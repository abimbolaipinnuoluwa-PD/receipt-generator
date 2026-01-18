const itemName = 'Gaming Mouse';

console.log(itemName);

let itemPrice = 25;

console.log(itemPrice);

let quantityBought = 3;

console.log(quantityBought);

const taxRate = 0.07;

console.log(taxRate);

let subTotal = itemPrice * quantityBought;

console.log(subTotal);

let taxAmount = subTotal * taxRate;

console.log(taxAmount);

let finalTotal = subTotal + taxAmount;

console.log(finalTotal);

console.log("You are buying 3 Gaming Mouse. Your finalTotal including tax is $80.25");
