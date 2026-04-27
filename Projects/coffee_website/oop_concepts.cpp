// ============================================================
//  CAFE LORENZO — Kiosk Ordering System (C++ Version)
//  This file mirrors the same OOP classes used in script.js
// ============================================================

#include <iostream>
#include <string>
#include <vector>
using namespace std;


// ************************************************************
// 1. CLASS & OBJECT — MenuItem (base class for all menu items)
//    ENCAPSULATION — private data + public getters/setters
//    DEFAULT CONSTRUCTOR — no arguments
//    PARAMETERIZED CONSTRUCTOR — with arguments
//    COPY CONSTRUCTOR — copy from another object
//    CONSTRUCTOR OVERLOADING — multiple constructors
//    OPERATOR OVERLOADING — + operator
// ************************************************************

class MenuItem {
private:
    string name;
    float price;
    string category;
    string description;

public:
    // --- DEFAULT CONSTRUCTOR ---
    MenuItem() {
        name = "Unknown";
        price = 0;
        category = "general";
        description = "";
        cout << "[Default Constructor] Empty MenuItem created" << endl;
    }

    // --- PARAMETERIZED CONSTRUCTOR ---
    MenuItem(string n, float p, string cat, string desc) {
        name = n;
        price = p;
        category = cat;
        description = desc;
        cout << "[Parameterized Constructor] " << name << " - Rs." << price << endl;
    }

    // --- COPY CONSTRUCTOR ---
    MenuItem(const MenuItem &other) {
        name = other.name;
        price = other.price;
        category = other.category;
        description = other.description;
        cout << "[Copy Constructor] Copied: " << name << endl;
    }

    // --- ENCAPSULATION — Getters ---
    string getName()     { return name; }
    float getPrice()     { return price; }
    string getCategory() { return category; }
    string getDesc()     { return description; }

    // --- ENCAPSULATION — Setter with validation ---
    void setPrice(float p) {
        if (p < 0) {
            cout << "Error: Price cannot be negative!" << endl;
            return;
        }
        price = p;
    }

    // --- OPERATOR OVERLOADING (+) ---
    float operator+(MenuItem &other) {
        return price + other.price;
    }

    void display() {
        cout << "  " << name << " | Rs." << price << " | " << description << endl;
    }

    float calculateTax() {
        return price * 0.05;
    }
};


// ************************************************************
// 2. SINGLE INHERITANCE — FoodItem extends MenuItem
//    (One parent → One child)
// ************************************************************

class FoodItem : public MenuItem {
private:
    bool vegItem;

public:
    FoodItem(string n, float p, string cat, string desc, bool veg)
        : MenuItem(n, p, cat, desc) {
        vegItem = veg;
    }

    bool isVeg() { return vegItem; }

    // Overriding parent's display()
    void display() {
        string icon = vegItem ? "[VEG]" : "[NON-VEG]";
        cout << "  " << icon << " " << getName() << " - Rs." << getPrice()
             << " | " << getDesc() << endl;
    }

    float calculateTax() {
        return getPrice() * 0.05;
    }
};


// ************************************************************
// 3. HIERARCHICAL INHERITANCE — One parent, MULTIPLE children
//    MenuItem → FoodItem  (child 1)
//    MenuItem → BeverageItem  (child 2)
// ************************************************************

class BeverageItem : public MenuItem {
private:
    string temperature;

public:
    BeverageItem(string n, float p, string cat, string desc, string temp)
        : MenuItem(n, p, cat, desc) {
        temperature = temp;
    }

    string getTemperature() { return temperature; }

    // Each child overrides display() differently
    void display() {
        string icon = (temperature == "hot") ? "[HOT]" : "[COLD]";
        cout << "  " << icon << " " << getName() << " - Rs." << getPrice()
             << " | " << getDesc() << endl;
    }

    float calculateTax() {
        return getPrice() * 0.05;
    }
};


// ************************************************************
// 4. MULTILEVEL INHERITANCE — Chain of 3 levels
//    MenuItem → FoodItem → PremiumFoodItem
// ************************************************************

class PremiumFoodItem : public FoodItem {
private:
    bool chefSpecial;

public:
    PremiumFoodItem(string n, float p, string cat, string desc, bool veg, bool chef)
        : FoodItem(n, p, cat, desc, veg) {
        chefSpecial = chef;
    }

    void display() {
        if (chefSpecial)
            cout << "  [CHEF SPECIAL] ";
        else
            cout << "  ";
        cout << getName() << " - Rs." << getPrice() << " | " << getDesc() << endl;
    }
};


// ************************************************************
// 5. MULTIPLE INHERITANCE — ComboItem inherits from TWO classes
//    FoodItem + Discountable → ComboItem
// ************************************************************

class Discountable {
private:
    float discountPercent;

public:
    Discountable() { discountPercent = 0; }

    void setDiscount(float d)  { discountPercent = d; }
    float getDiscount()        { return discountPercent; }
};

class ComboItem : public FoodItem, public Discountable {
private:
    int savings;

public:
    ComboItem(string n, float p, string cat, string desc, bool veg, int sav, float disc)
        : FoodItem(n, p, cat, desc, veg) {
        savings = sav;
        setDiscount(disc);
    }

    int getSavings() { return savings; }

    // --- METHOD OVERLOADING ---
    // Same function name, different number of parameters
    float calculatePrice() {
        return getPrice();
    }

    float calculatePrice(bool withGST) {
        if (withGST)
            return getPrice() * 1.05;
        return getPrice();
    }

    float calculatePrice(bool withGST, bool rounded) {
        float total = getPrice() * 1.05;
        if (rounded)
            return (int)(total + 0.5);
        return total;
    }

    void display() {
        cout << "  [COMBO] " << getName() << " - Rs." << getPrice()
             << " (Save Rs." << savings << ") | " << getDesc() << endl;
    }
};


// ************************************************************
// 6. HYBRID INHERITANCE — Combines Multiple + Hierarchical
//    CoffeeShop → DineIn + TakeAway → OnlineOrder
// ************************************************************

class CoffeeShop {
public:
    void welcome() {
        cout << "  Welcome to Cafe Lorenzo!" << endl;
    }
};

class DineIn : virtual public CoffeeShop {
public:
    void sitDown() {
        cout << "  Please take a seat" << endl;
    }
};

class TakeAway : virtual public CoffeeShop {
public:
    void pack() {
        cout << "  Packing your order..." << endl;
    }
};

class OnlineOrder : public DineIn, public TakeAway {
public:
    void deliver() {
        cout << "  Your order will be delivered!" << endl;
    }
};


// ************************************************************
// 7. CartItem — Holds a menu item with quantity
// ************************************************************

class CartItem {
private:
    string itemName;
    float unitPrice;
    int quantity;

public:
    CartItem(string name, float price, int qty) {
        itemName = name;
        unitPrice = price;
        quantity = qty;
    }

    float getSubtotal()   { return unitPrice * quantity; }
    float getTax()        { return getSubtotal() * 0.05; }
    string getName()      { return itemName; }
    int getQuantity()     { return quantity; }
    void setQuantity(int q) { quantity = q; }

    void display() {
        cout << "  " << itemName << " x" << quantity
             << " = Rs." << getSubtotal() << endl;
    }
};


// ************************************************************
// 8. Cart — Manages cart items (Encapsulation)
// ************************************************************

class Cart {
private:
    vector<CartItem> items;

public:
    Cart() {
        cout << "[Cart] New cart created" << endl;
    }

    void addItem(string name, float price, int qty) {
        CartItem item(name, price, qty);
        items.push_back(item);
        cout << "  Added: " << name << " x" << qty << endl;
    }

    float getSubtotal() {
        float total = 0;
        for (int i = 0; i < items.size(); i++)
            total += items[i].getSubtotal();
        return total;
    }

    float getCGST()       { return getSubtotal() * 0.025; }
    float getSGST()       { return getSubtotal() * 0.025; }
    float getGrandTotal() { return getSubtotal() + getCGST() + getSGST(); }

    int getItemCount() {
        int count = 0;
        for (int i = 0; i < items.size(); i++)
            count += items[i].getQuantity();
        return count;
    }

    void displayItems() {
        for (int i = 0; i < items.size(); i++)
            items[i].display();
    }

    bool isEmpty() { return items.size() == 0; }
};


// ************************************************************
// 9. Bill — Generates receipt (Message Passing: Bill ← Cart)
// ************************************************************

class Bill {
private:
    string billNo;
    float subtotal, cgst, sgst, grandTotal;
    int totalItems;

public:
    Bill(Cart &cart) {
        billNo = "CL-00142";
        subtotal = cart.getSubtotal();
        cgst = cart.getCGST();
        sgst = cart.getSGST();
        grandTotal = cart.getGrandTotal();
        totalItems = cart.getItemCount();
    }

    void printReceipt() {
        cout << "\n  ========================================" << endl;
        cout << "       CAFE LORENZO - TAX INVOICE" << endl;
        cout << "  No. 42, Usman Road, T Nagar" << endl;
        cout << "  Chennai - 600017, Tamil Nadu" << endl;
        cout << "  Ph: +91 44 2434 5678" << endl;
        cout << "  GSTIN: 33AABCL1234M1Z5" << endl;
        cout << "  ----------------------------------------" << endl;
        cout << "  Bill No: " << billNo << endl;
        cout << "  ----------------------------------------" << endl;
        cout << "  Sub Total   : Rs." << subtotal << endl;
        cout << "  CGST @ 2.5% : Rs." << cgst << endl;
        cout << "  SGST @ 2.5% : Rs." << sgst << endl;
        cout << "  ----------------------------------------" << endl;
        cout << "  GRAND TOTAL : Rs." << grandTotal << endl;
        cout << "  Total Items : " << totalItems << endl;
        cout << "  ----------------------------------------" << endl;
        cout << "  Thank You! Visit Again!" << endl;
        cout << "  ========================================" << endl;
    }
};


// ************************************************************
// 10. Order — Connects Cart to Bill
// ************************************************************

class Order {
private:
    string status;

public:
    Order() { status = "pending"; }

    Bill confirm(Cart &cart) {
        status = "confirmed";
        cout << "  Order confirmed!" << endl;
        Bill bill(cart);
        return bill;
    }
};


// ************************************************************
// MAIN FUNCTION — Simulates the Cafe Lorenzo Kiosk
// ************************************************************

int main() {

    cout << "================================================" << endl;
    cout << "    CAFE LORENZO — Kiosk System (C++ Version)   " << endl;
    cout << "    Same classes as script.js                    " << endl;
    cout << "================================================" << endl;


    // --- 1. CLASS & OBJECT + DEFAULT CONSTRUCTOR ---
    cout << "\n--- 1. CLASS & OBJECT + DEFAULT CONSTRUCTOR ---" << endl;
    MenuItem item1;
    item1.display();


    // --- 2. PARAMETERIZED CONSTRUCTOR ---
    cout << "\n--- 2. PARAMETERIZED CONSTRUCTOR ---" << endl;
    MenuItem item2("Cappuccino", 180, "hot", "Rich espresso with steamed milk foam");
    item2.display();


    // --- 3. COPY CONSTRUCTOR ---
    cout << "\n--- 3. COPY CONSTRUCTOR ---" << endl;
    MenuItem item3 = item2;
    item3.display();


    // --- 4. CONSTRUCTOR OVERLOADING ---
    cout << "\n--- 4. CONSTRUCTOR OVERLOADING ---" << endl;
    cout << "  (3 constructors: Default, Parameterized, Copy)" << endl;


    // --- 5. OPERATOR OVERLOADING (+) ---
    cout << "\n--- 5. OPERATOR OVERLOADING ---" << endl;
    MenuItem espresso("Espresso", 150, "hot", "Strong single shot");
    MenuItem brownie("Brownie", 160, "desserts", "Warm chocolate brownie");
    float combined = espresso + brownie;
    cout << "  Espresso + Brownie = Rs." << combined << endl;


    // --- 6. SINGLE INHERITANCE ---
    cout << "\n--- 6. SINGLE INHERITANCE (FoodItem -> MenuItem) ---" << endl;
    FoodItem vegBurger("Veg Burger", 150, "snacks", "Crispy patty with fresh veggies", true);
    FoodItem chickenBurger("Chicken Burger", 200, "snacks", "Grilled chicken with sauce", false);
    vegBurger.display();
    chickenBurger.display();


    // --- 7. HIERARCHICAL INHERITANCE ---
    cout << "\n--- 7. HIERARCHICAL INHERITANCE (FoodItem & BeverageItem -> MenuItem) ---" << endl;
    BeverageItem latte("Latte", 200, "hot", "Smooth espresso with velvety milk", "hot");
    BeverageItem coldBrew("Cold Brew", 250, "cold", "12-hour steeped smooth coffee", "cold");
    latte.display();
    coldBrew.display();


    // --- 8. MULTILEVEL INHERITANCE ---
    cout << "\n--- 8. MULTILEVEL INHERITANCE (MenuItem -> FoodItem -> PremiumFoodItem) ---" << endl;
    PremiumFoodItem chefPlatter("Chef's Platter", 350, "snacks", "Assorted premium appetizers", true, true);
    chefPlatter.display();


    // --- 9. MULTIPLE INHERITANCE ---
    cout << "\n--- 9. MULTIPLE INHERITANCE (FoodItem + Discountable -> ComboItem) ---" << endl;
    ComboItem combo("Coffee + Brownie", 280, "combos", "Perfect coffee & dessert pair", true, 60, 10);
    combo.display();


    // --- 10. METHOD OVERLOADING ---
    cout << "\n--- 10. METHOD OVERLOADING ---" << endl;
    cout << "  calculatePrice()           = Rs." << combo.calculatePrice() << endl;
    cout << "  calculatePrice(true)       = Rs." << combo.calculatePrice(true) << endl;
    cout << "  calculatePrice(true, true) = Rs." << combo.calculatePrice(true, true) << endl;


    // --- 11. HYBRID INHERITANCE ---
    cout << "\n--- 11. HYBRID INHERITANCE (CoffeeShop -> DineIn + TakeAway -> OnlineOrder) ---" << endl;
    OnlineOrder online;
    online.welcome();
    online.sitDown();
    online.pack();
    online.deliver();


    // --- 12. FULL ORDERING FLOW ---
    cout << "\n--- 12. FULL ORDERING FLOW (Cart -> Order -> Bill) ---" << endl;
    Cart cart;
    cart.addItem("Cappuccino", 180, 2);
    cart.addItem("Veg Burger", 150, 1);
    cart.addItem("Brownie", 160, 1);
    cart.addItem("Cold Brew", 250, 1);

    cout << "\n  --- Cart Items ---" << endl;
    cart.displayItems();

    cout << "\n  --- Placing Order ---" << endl;
    Order order;
    Bill bill = order.confirm(cart);
    bill.printReceipt();


    cout << "\n================================================" << endl;
    cout << "    ALL OOP CONCEPTS DEMONSTRATED!               " << endl;
    cout << "================================================" << endl;

    return 0;
}
