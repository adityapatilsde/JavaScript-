/* CLASS = (ES6 feauture) provides a more structured and 
cleaner way to work with objects compared to traditional 
constructor functions ex: static keyword , inheritance and
encapsulation */

class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    } 

    displayproduct(){
        console.log(`Product: ${this.name}`);
        console.log(`price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new product("Shirt", 19.99);
const product2 = new product("Pants", 22.50);
const product3 = new product("Underwear", 100.00);

product3.displayproduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);


