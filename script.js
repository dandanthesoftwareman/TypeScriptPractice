"use strict";
exports.__esModule = true;
var Mountains = [{ Name: "Kilimanjaro", Height: 19341 }, { Name: "Everest", Height: 29029 }, { Name: "Denali", Height: 20310 }];
function FindTallestMountain(Mountains) {
    var maximum = 0;
    var result = "";
    Mountains.forEach(function (m) {
        if (m.Height > maximum) {
            maximum = m.Height;
            result = m.Name;
        }
    });
    return result;
}
console.log(FindTallestMountain(Mountains));
var products = [{ name: "Beef Jerky", price: 25 }, { name: "Pop Tarts", price: 5.50 }, { name: "Cereal", price: 3.75 }];
function calcAverageProductPrice(pArray) {
    var sum = 0;
    var arraySize = pArray.length;
    pArray.forEach(function (p) {
        sum += p.price;
    });
    return sum / arraySize;
}
console.log(calcAverageProductPrice(products));
var motor = {
    product: {
        name: "motor",
        price: 10.00
    },
    quantity: 10
};
var sensor = {
    product: {
        name: "sensor",
        price: 12.50
    },
    quantity: 4
};
var LED = {
    product: {
        name: "LED",
        price: 1.00
    },
    quantity: 20
};
var inventory = [motor, sensor, LED];
function calcInventoryValue(items) {
    var total = 0;
    items.forEach(function (item) {
        total += (item.product.price * item.quantity);
    });
    return total;
}
console.log(calcInventoryValue(inventory));
