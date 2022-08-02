export{}

interface Mountain {
    Name: string;
    Height: number;
}

let Mountains: Mountain[] = [{Name: "Kilimanjaro", Height: 19341}, {Name: "Everest", Height: 29029}, {Name: "Denali", Height: 20310}];

function FindTallestMountain(Mountains: Mountain[]):string {

    let maximum = 0; 
    let result = "";
    Mountains.forEach((m:Mountain) => {
        if (m.Height > maximum) {
            maximum = m.Height;
            result = m.Name;
        }
    });
    return result;
}
console.log(FindTallestMountain(Mountains));

interface Product {
    name: string;
    price: number;
}

let products: Product[] = [{name: "Beef Jerky", price: 25}, {name: "Pop Tarts", price: 5.50},{name: "Cereal", price: 3.75}];

function calcAverageProductPrice(pArray: Product[]): number {
    let sum: number = 0;
    let arraySize: number = pArray.length;

    pArray.forEach((p:Product) => {
        sum += p.price;
    })
    return sum/arraySize;
}

console.log(calcAverageProductPrice(products));


interface InventoryItem {
    product: Product;
    quantity: number;
}

let motor: InventoryItem = {
    product: {
        name: "motor",
        price: 10.00
    },
    quantity: 10
};

let sensor: InventoryItem = {
    product: {
        name: "sensor",
        price: 12.50
    },
    quantity: 4
};

let LED: InventoryItem = {
    product: {
        name: "LED",
        price: 1.00
    },
    quantity: 20
};

let inventory: InventoryItem[] = [motor, sensor, LED];

function calcInventoryValue(items: InventoryItem[]): number {
    let total: number = 0;
    items.forEach((item) => {
        total += (item.product.price * item.quantity);
    })
    return total;
}

console.log(calcInventoryValue(inventory));