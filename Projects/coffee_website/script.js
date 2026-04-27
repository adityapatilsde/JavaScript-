/*
 * CAFE LORENZO — KIOSK ORDERING SYSTEM
 * OOP Concepts Used in This File:
 *
 * 1. Class & Object           — MenuItem, Cart, Bill, Order
 * 2. Single Inheritance       — FoodItem extends MenuItem
 * 3. Hierarchical Inheritance — FoodItem & BeverageItem both extend MenuItem
 * 4. Multilevel Inheritance   — PremiumFoodItem → FoodItem → MenuItem
 * 5. Multiple Inheritance     — ComboItem → FoodItem + Discountable (mixin)
 * 6. Hybrid Inheritance       — Combines Multiple + Multilevel
 * 7. Default Constructor      — MenuItem(), Cart()
 * 8. Parameterized Constructor— MenuItem(config)
 * 9. Copy Constructor         — MenuItem(anotherMenuItem)
 * 10. Constructor Overloading — Multiple constructors in MenuItem
 * 11. Method Overloading      — calculatePrice() with different args
 * 12. Operator Overloading    — valueOf() and toString()
 */


// ============================================================
//  CLASS 1: MenuItem (BASE CLASS)
//  Shows: Class, Object, Encapsulation,
//         Default/Parameterized/Copy Constructor,
//         Constructor Overloading, Operator Overloading
// ============================================================

class MenuItem {
  constructor(arg1, price, category, image, desc) {
    // CONSTRUCTOR OVERLOADING — behaves differently based on arguments
    if (arg1 === undefined) {
      // DEFAULT CONSTRUCTOR
      this.id = 'ITEM-' + (++MenuItem.counter);
      this.name = 'Unknown'; this.price = 0; this.category = 'general';
      this.image = ''; this.description = '';
    } else if (typeof arg1 === 'object' && !(arg1 instanceof MenuItem)) {
      // PARAMETERIZED CONSTRUCTOR (config object)
      this.id = 'ITEM-' + (++MenuItem.counter);
      this.name = arg1.name || 'Unknown'; this.price = arg1.price || 0;
      this.category = arg1.category || 'general'; this.image = arg1.image || '';
      this.description = arg1.description || '';
    } else if (arg1 instanceof MenuItem) {
      // COPY CONSTRUCTOR
      this.id = 'ITEM-' + (++MenuItem.counter);
      this.name = arg1.name; this.price = arg1.price;
      this.category = arg1.category; this.image = arg1.image;
      this.description = arg1.description;
    }
  }
  // ENCAPSULATION — Getters
  getId() { return this.id; }
  getName() { return this.name; }
  getPrice() { return this.price; }
  getCategory() { return this.category; }
  getImage() { return this.image; }
  getDesc() { return this.description; }
  setPrice(p) { if (p >= 0) this.price = p; }
  display() { return this.name + ' - ₹' + this.price; }
  calculateTax() { return this.price * 0.05; }
  // OPERATOR OVERLOADING
  valueOf() { return this.price; }
  toString() { return this.name + ' (₹' + this.price + ')'; }
}
MenuItem.counter = 0;


// ============================================================
//  CLASS 2: FoodItem — SINGLE INHERITANCE (FoodItem → MenuItem)
// ============================================================

class FoodItem extends MenuItem {
  constructor(config) {
    super(config);
    this.isVegItem = config.isVeg !== undefined ? config.isVeg : true;
  }
  isVeg() { return this.isVegItem; }
  display() { return (this.isVegItem ? '🟢' : '🔴') + ' ' + this.getName() + ' - ₹' + this.getPrice(); }
  calculateTax() { return this.getPrice() * 0.05; }
  clone() { return new FoodItem({ name: this.name, price: this.price, category: this.category, image: this.image, description: this.description, isVeg: this.isVegItem }); }
}


// ============================================================
//  CLASS 3: BeverageItem — HIERARCHICAL INHERITANCE
//  (Both FoodItem AND BeverageItem extend MenuItem)
// ============================================================

class BeverageItem extends MenuItem {
  constructor(config) {
    super(config);
    this.temperature = config.temperature || 'hot';
  }
  getTemperature() { return this.temperature; }
  display() { return (this.temperature === 'hot' ? '🔥' : '❄️') + ' ' + this.getName() + ' - ₹' + this.getPrice(); }
  calculateTax() { return this.getPrice() * 0.05; }
}


// ============================================================
//  CLASS 4: PremiumFoodItem — MULTILEVEL INHERITANCE
//  (PremiumFoodItem → FoodItem → MenuItem = 3 levels)
// ============================================================

class PremiumFoodItem extends FoodItem {
  constructor(config) {
    super(config);
    this.chefSpecial = config.chefSpecial || false;
  }
  display() { return this.chefSpecial ? '⭐ ' + super.display() + " [Chef's Special]" : super.display(); }
  calculateTax() { return this.getPrice() * 0.05; }
}


// ============================================================
//  MIXIN: Discountable — Used for MULTIPLE INHERITANCE
// ============================================================

var Discountable = (Base) => class extends Base {
  constructor(config) { super(config); this.discountPct = 0; }
  setDiscount(pct) { this.discountPct = pct; }
  getDiscount() { return this.discountPct; }
  getDiscountedPrice() { return this.getPrice() * (1 - this.discountPct / 100); }
};


// ============================================================
//  CLASS 5: ComboItem — MULTIPLE + HYBRID INHERITANCE
//  (ComboItem = FoodItem + Discountable mixin)
//  Also shows: METHOD OVERLOADING (calculatePrice with diff args)
// ============================================================

class ComboItem extends Discountable(FoodItem) {
  constructor(config) {
    super(config);
    this.items = config.items || [];
    this.savings = config.savings || 0;
    if (config.discount) this.setDiscount(config.discount);
  }
  getItems() { return this.items; }
  getSavings() { return this.savings; }
  display() { return '🍔☕ COMBO: ' + this.getName() + ' - ₹' + this.getPrice() + ' (Save ₹' + this.savings + ')'; }

  // METHOD OVERLOADING — same name, different behavior by argument count
  calculatePrice(withGST, rounded) {
    var base = this.getDiscountedPrice();
    if (arguments.length === 0) return base;
    if (arguments.length === 1) return withGST ? base * 1.05 : base;
    return rounded ? Math.round(base * 1.05) : base * 1.05;
  }
  calculateTax() { return this.getDiscountedPrice() * 0.05; }
}


// ============================================================
//  CLASS 6: CartItem — Holds one item + quantity
// ============================================================

class CartItem {
  constructor(menuItem, qty) {
    this.menuItem = menuItem;
    this.quantity = qty || 1;
  }
  getMenuItem() { return this.menuItem; }
  getQuantity() { return this.quantity; }
  setQuantity(q) { this.quantity = q; }
  getSubtotal() { return this.menuItem.getPrice() * this.quantity; }
  getTax() { return this.menuItem.calculateTax() * this.quantity; }
  toPrintFormat() { return { name: this.menuItem.getName(), qty: this.quantity, unitPrice: this.menuItem.getPrice(), amount: this.getSubtotal() }; }
  valueOf() { return this.getSubtotal(); }
}


// ============================================================
//  CLASS 7: Cart — Manages all items in the cart
//  Shows: DEFAULT CONSTRUCTOR, METHOD OVERLOADING (addItem)
// ============================================================

class Cart {
  constructor() { this.items = new Map(); }  // DEFAULT CONSTRUCTOR

  // METHOD OVERLOADING — works with (menuItem) or (menuItem, qty)
  addItem(menuItem, qty) {
    var id = menuItem.getId();
    if (this.items.has(id)) {
      var ci = this.items.get(id);
      ci.setQuantity(ci.getQuantity() + (qty || 1));
    } else {
      this.items.set(id, new CartItem(menuItem, qty || 1));
    }
  }
  removeItem(id) { this.items.delete(id); }
  updateQuantity(id, qty) { if (qty <= 0) this.items.delete(id); else { var ci = this.items.get(id); if (ci) ci.setQuantity(qty); } }
  getItem(id) { return this.items.get(id); }
  getItems() { return Array.from(this.items.values()); }
  getItemCount() { var c = 0; for (var ci of this.items.values()) c += ci.getQuantity(); return c; }
  getSubtotal() { var t = 0; for (var ci of this.items.values()) t += ci.getSubtotal(); return t; }
  getTotalTax() { var t = 0; for (var ci of this.items.values()) t += ci.getTax(); return t; }
  getCGST() { return this.getTotalTax() / 2; }
  getSGST() { return this.getTotalTax() / 2; }
  getGrandTotal() { return this.getSubtotal() + this.getTotalTax(); }
  isEmpty() { return this.items.size === 0; }
  clear() { this.items.clear(); }
}


// ============================================================
//  CLASS 8: Bill — Generates receipt from Cart
// ============================================================

class Bill {
  constructor(cart) {
    this.billNo = 'CL-' + String(++Bill.counter).padStart(5, '0');
    this.date = new Date();
    this.billItems = cart.getItems().map(ci => ci.toPrintFormat());
    this.subtotal = cart.getSubtotal();
    this.cgst = cart.getCGST();
    this.sgst = cart.getSGST();
    this.grandTotal = cart.getGrandTotal();
    this.totalItems = cart.getItemCount();
  }
  getBillNumber() { return this.billNo; }
  getGrandTotal() { return this.grandTotal; }
  fmtDate() { var d = this.date; return String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear(); }
  fmtTime() { var d = this.date, h = d.getHours(), ap = h>=12?'PM':'AM'; return (h%12||12)+':'+String(d.getMinutes()).padStart(2,'0')+' '+ap; }

  generateReceiptHTML() {
    var rows = this.billItems.map(i =>
      `<div class="bill-item-row"><span>${i.name}</span><span>${i.qty}</span><span>₹${i.unitPrice}</span><span>₹${i.amount}</span></div>`
    ).join('');
    return `<div class="bill-header"><div class="bill-logo">☕ CAFE LORENZO</div>
      <div class="bill-address">No. 42, Usman Road, T Nagar<br>Chennai - 600017<br>Tamil Nadu, India<br>Ph: +91 44 2434 5678</div>
      <div class="bill-gstin">GSTIN: 33AABCL1234M1Z5</div></div>
      <div class="bill-meta"><span>Bill No: ${this.billNo}</span><span>${this.fmtDate()} ${this.fmtTime()}</span></div>
      <div class="bill-items-header"><span>Item</span><span>Qty</span><span>Price</span><span>Amount</span></div>${rows}
      <div class="bill-totals">
        <div class="bill-total-row"><span>Sub Total</span><span>₹${this.subtotal.toFixed(2)}</span></div>
        <div class="bill-total-row"><span>CGST @ 2.5%</span><span>₹${this.cgst.toFixed(2)}</span></div>
        <div class="bill-total-row"><span>SGST @ 2.5%</span><span>₹${this.sgst.toFixed(2)}</span></div>
        <div class="bill-total-row grand"><span>GRAND TOTAL</span><span>₹${this.grandTotal.toFixed(2)}</span></div>
        <div class="bill-total-row items-count"><span>Total Items</span><span>${this.totalItems}</span></div>
      </div><div class="bill-footer">
        <div class="bill-total-highlight">Total Amount (Incl. GST): ₹${this.grandTotal.toFixed(2)}</div>
        <div class="thank-you">Thank You! Visit Again! ☕</div>
        <div class="visit-again">Your satisfaction is our priority</div></div>`;
  }
}
Bill.counter = 141;


// ============================================================
//  CLASS 9: Order — Connects Cart → Bill
// ============================================================

class Order {
  constructor(cart) { this.cart = cart; this.bill = null; this.status = 'pending'; }
  confirm() { this.bill = new Bill(this.cart); this.status = 'confirmed'; return this.bill; }
  getBill() { return this.bill; }
  getStatus() { return this.status; }
}


// ============================================================
//  FACTORY — Creates correct object based on type
// ============================================================

class MenuItemFactory {
  static create(config) {
    if (config.type === 'food') return new FoodItem(config);
    if (config.type === 'beverage') return new BeverageItem(config);
    if (config.type === 'premium-food') return new PremiumFoodItem(config);
    if (config.type === 'combo') return new ComboItem(config);
    return new FoodItem(config);
  }
}


// ============================================================
//  MENU DATA
// ============================================================

var MENU = {
  categories: [
    { id:'hot', name:'Hot Beverages', image:'assets.img/hot-beverages.png', count:6, bestseller:true },
    { id:'cold', name:'Cold Beverages', image:'assets.img/cold-beverages.png', count:5 },
    { id:'snacks', name:'Snacks', image:'assets.img/burger-frenchfries.png', count:6, bestseller:true },
    { id:'desserts', name:'Desserts', image:'assets.img/desserts.png', count:5 },
    { id:'refreshments', name:'Refreshments', image:'assets.img/refreshment.png', count:4 },
    { id:'combos', name:'Special Combos', image:'assets.img/special-combo.png', count:4, bestseller:true }
  ],
  items: {
    hot: [
      { type:'beverage', name:'Cappuccino', price:180, temperature:'hot', image:'assets.img/hot-beverages.png', description:'Rich espresso with steamed milk foam', category:'hot' },
      { type:'beverage', name:'Espresso', price:150, temperature:'hot', image:'assets.img/hot-beverages.png', description:'Strong and bold single shot', category:'hot' },
      { type:'beverage', name:'Latte', price:200, temperature:'hot', image:'assets.img/hot-beverages.png', description:'Smooth espresso with velvety milk', category:'hot' },
      { type:'beverage', name:'Americano', price:160, temperature:'hot', image:'assets.img/hot-beverages.png', description:'Espresso diluted with hot water', category:'hot' },
      { type:'beverage', name:'Mocha', price:220, temperature:'hot', image:'assets.img/hot-beverages.png', description:'Espresso, chocolate & steamed milk', category:'hot' },
      { type:'beverage', name:'Hot Chocolate', price:190, temperature:'hot', image:'assets.img/hot-beverages.png', description:'Creamy Belgian cocoa delight', category:'hot' }
    ],
    cold: [
      { type:'beverage', name:'Iced Latte', price:220, temperature:'cold', image:'assets.img/cold-beverages.png', description:'Chilled espresso with cold milk', category:'cold' },
      { type:'beverage', name:'Cold Brew', price:250, temperature:'cold', image:'assets.img/cold-beverages.png', description:'12-hour steeped smooth coffee', category:'cold' },
      { type:'beverage', name:'Frappe', price:280, temperature:'cold', image:'assets.img/cold-beverages.png', description:'Blended iced coffee with cream', category:'cold' },
      { type:'beverage', name:'Iced Americano', price:180, temperature:'cold', image:'assets.img/cold-beverages.png', description:'Espresso with cold water and ice', category:'cold' },
      { type:'beverage', name:'Mocha Shake', price:300, temperature:'cold', image:'assets.img/cold-beverages.png', description:'Chocolate coffee milkshake', category:'cold' }
    ],
    snacks: [
      { type:'food', name:'Veg Burger', price:150, isVeg:true, image:'assets.img/burger-frenchfries.png', description:'Crispy patty with fresh veggies', category:'snacks' },
      { type:'food', name:'Chicken Burger', price:200, isVeg:false, image:'assets.img/burger-frenchfries.png', description:'Grilled chicken with special sauce', category:'snacks' },
      { type:'food', name:'French Fries', price:120, isVeg:true, image:'assets.img/burger-frenchfries.png', description:'Golden crispy fries with ketchup', category:'snacks' },
      { type:'food', name:'Paneer Wrap', price:180, isVeg:true, image:'assets.img/burger-frenchfries.png', description:'Spiced paneer in a tortilla wrap', category:'snacks' },
      { type:'food', name:'Garlic Bread', price:140, isVeg:true, image:'assets.img/burger-frenchfries.png', description:'Toasted bread with garlic butter', category:'snacks' },
      { type:'premium-food', name:"Chef's Platter", price:350, isVeg:true, chefSpecial:true, image:'assets.img/burger-frenchfries.png', description:'Assorted premium appetizers', category:'snacks' }
    ],
    desserts: [
      { type:'food', name:'Brownie', price:160, isVeg:true, image:'assets.img/desserts.png', description:'Warm chocolate brownie', category:'desserts' },
      { type:'food', name:'Cheesecake', price:220, isVeg:true, image:'assets.img/desserts.png', description:'New York style cheesecake', category:'desserts' },
      { type:'food', name:'Tiramisu', price:280, isVeg:true, image:'assets.img/desserts.png', description:'Italian coffee-flavored dessert', category:'desserts' },
      { type:'food', name:'Muffin', price:130, isVeg:true, image:'assets.img/desserts.png', description:'Freshly baked blueberry muffin', category:'desserts' },
      { type:'food', name:'Cookie', price:90, isVeg:true, image:'assets.img/desserts.png', description:'Chunky chocolate chip cookie', category:'desserts' }
    ],
    refreshments: [
      { type:'beverage', name:'Fresh Lime Soda', price:120, temperature:'cold', image:'assets.img/refreshment.png', description:'Zesty lime with soda & mint', category:'refreshments' },
      { type:'beverage', name:'Mango Smoothie', price:200, temperature:'cold', image:'assets.img/refreshment.png', description:'Fresh Alphonso mango blend', category:'refreshments' },
      { type:'beverage', name:'Virgin Mojito', price:180, temperature:'cold', image:'assets.img/refreshment.png', description:'Mint, lime & soda refresher', category:'refreshments' },
      { type:'beverage', name:'Watermelon Cooler', price:160, temperature:'cold', image:'assets.img/refreshment.png', description:'Fresh watermelon juice with ice', category:'refreshments' }
    ],
    combos: [
      { type:'combo', name:'Coffee + Brownie', price:280, isVeg:true, items:['Cappuccino','Brownie'], savings:60, discount:10, image:'assets.img/special-combo.png', description:'Perfect coffee & dessert pair', category:'combos' },
      { type:'combo', name:'Burger Meal', price:320, isVeg:true, items:['Veg Burger','French Fries','Fresh Lime Soda'], savings:70, discount:15, image:'assets.img/special-combo.png', description:'Complete meal deal', category:'combos' },
      { type:'combo', name:'Snack Attack', price:250, isVeg:true, items:['Garlic Bread','Frappe'], savings:50, discount:12, image:'assets.img/special-combo.png', description:'Light bites with cold coffee', category:'combos' },
      { type:'combo', name:'Lorenzo Special', price:450, isVeg:true, items:['Latte','Cheesecake',"Chef's Platter"], savings:120, discount:20, image:'assets.img/special-combo.png', description:'Our signature premium combo', category:'combos' }
    ]
  },
  topSelling: ['Cappuccino','Veg Burger','Frappe','Brownie','Coffee + Brownie']
};


// ============================================================
//  CLASS 10: KioskController — Main App (uses all classes above)
// ============================================================

class KioskController {
  constructor() {
    this.cart = new Cart();
    this.screen = 'welcome';
    this.category = null;
    this.menuMap = new Map();
    this.allItems = [];
    this.init();
  }

  init() {
    // Create OBJECTS using Factory
    for (var [cat, list] of Object.entries(MENU.items)) {
      for (var cfg of list) {
        var item = MenuItemFactory.create(cfg);
        this.menuMap.set(item.getId(), item);
        this.allItems.push(item);
      }
    }
    this.particles();
    this.renderCategories();
    this.renderTopSelling();
  }

  navigateTo(s) {
    var map = { welcome:'screenWelcome', categories:'screenCategories', items:'screenItems', cart:'screenCart', bill:'screenBill' };
    var prev = document.getElementById(map[this.screen]);
    var next = document.getElementById(map[s]);
    if (prev) { prev.classList.remove('active'); prev.classList.add('exit-left'); setTimeout(() => prev.classList.remove('exit-left'), 500); }
    if (next) next.classList.add('active');
    this.screen = s;
    this.badges();
    if (s === 'cart') this.renderCart();
    if (s === 'items') this.renderItems();
  }

  showCategory(id) { this.category = id; this.navigateTo('items'); }

  particles() {
    var el = document.getElementById('particles'), em = ['☕','🫘','✨','🍪','🧁','🍰'];
    for (var i = 0; i < 15; i++) {
      var p = document.createElement('span'); p.className = 'particle';
      p.textContent = em[Math.floor(Math.random()*em.length)];
      p.style.left = Math.random()*100+'%'; p.style.animationDuration = (6+Math.random()*8)+'s';
      p.style.animationDelay = Math.random()*6+'s'; p.style.fontSize = (1+Math.random()*1.5)+'rem';
      el.appendChild(p);
    }
  }

  renderCategories() {
    document.getElementById('categoryGrid').innerHTML = MENU.categories.map(c =>
      `<div class="category-card fade-in-up" onclick="KioskApp.showCategory('${c.id}')">
        ${c.bestseller ? '<span class="bestseller-tag">★ Popular</span>' : ''}
        <img src="${c.image}" alt="${c.name}"><div class="cat-name">${c.name}</div><div class="cat-count">${c.count} items</div></div>`
    ).join('');
  }

  renderTopSelling() {
    var top = this.allItems.filter(i => MENU.topSelling.includes(i.getName()));
    document.getElementById('topSellingScroll').innerHTML = top.map(i =>
      `<div class="top-sell-card"><img src="${i.getImage()}" alt="${i.getName()}">
        <div class="ts-name">${i.getName()}</div><div class="ts-price">₹${i.getPrice()}</div>
        <button class="quick-add-btn" onclick="KioskApp.quickAdd('${i.getId()}')">+ Add</button></div>`
    ).join('');
  }

  renderItems() {
    if (!this.category) return;
    var cat = MENU.categories.find(c => c.id === this.category);
    document.getElementById('itemsTitle').textContent = cat ? cat.name : 'Items';
    document.getElementById('comboBanner').style.display = this.category === 'combos' ? 'none' : 'flex';
    var items = this.allItems.filter(i => i.getCategory() === this.category);
    document.getElementById('itemsGrid').innerHTML = items.map(item => {
      var ci = this.cart.getItem(item.getId()), qty = ci ? ci.getQuantity() : 0, isC = item instanceof ComboItem;
      return `<div class="item-card fade-in-up"><img src="${item.getImage()}" alt="${item.getName()}" class="item-img">
        <div class="item-name">${item.getName()}</div><div class="item-desc">${item.getDesc()}${isC ? ' — Save ₹'+item.getSavings() : ''}</div>
        <div class="item-price">₹${item.getPrice()}</div>
        ${qty > 0 ? `<div class="qty-controls"><button class="qty-btn minus" onclick="KioskApp.changeQty('${item.getId()}',-1)">−</button>
          <span class="qty-display">${qty}</span><button class="qty-btn plus" onclick="KioskApp.changeQty('${item.getId()}',1)">+</button></div>`
        : `<button class="add-to-cart-btn" onclick="KioskApp.addToCart('${item.getId()}')">Add to Cart</button>`}</div>`;
    }).join('');
    this.bottomBar();
  }

  addToCart(id) {
    var item = this.menuMap.get(id);
    if (item) { this.cart.addItem(item); this.toast(item.getName()+' added ✓'); if (this.screen==='items') this.renderItems(); if (this.screen==='cart') this.renderCart(); this.badges(); }
  }
  quickAdd(id) { this.addToCart(id); }
  changeQty(id, d) { var ci = this.cart.getItem(id); if (ci) { this.cart.updateQuantity(id, ci.getQuantity()+d); if (this.screen==='items') this.renderItems(); if (this.screen==='cart') this.renderCart(); this.badges(); } }
  removeFromCart(id) { this.cart.removeItem(id); this.renderCart(); this.badges(); }

  renderCart() {
    var content = document.getElementById('cartContent'), footer = document.getElementById('cartFooter');
    if (this.cart.isEmpty()) { content.innerHTML = '<div class="cart-empty"><div class="empty-icon">🛒</div><h3>Your cart is empty</h3><p>Browse our menu and add items!</p></div>'; footer.style.display='none'; return; }
    var items = this.cart.getItems();
    var html = items.map(ci => { var mi = ci.getMenuItem(); return `<div class="cart-item">
      <img src="${mi.getImage()}" alt="${mi.getName()}" class="ci-img">
      <div class="ci-details"><div class="ci-name">${mi.getName()}</div><div class="ci-unit-price">₹${mi.getPrice()} each</div></div>
      <div class="ci-qty"><button class="qty-btn minus" onclick="KioskApp.changeQty('${mi.getId()}',-1)">−</button><span class="qty-display">${ci.getQuantity()}</span><button class="qty-btn plus" onclick="KioskApp.changeQty('${mi.getId()}',1)">+</button></div>
      <div class="ci-total">₹${ci.getSubtotal()}</div>
      <button class="remove-item-btn" onclick="KioskApp.removeFromCart('${mi.getId()}')">✕</button></div>`; }).join('');

    if (!items.some(ci => ci.getMenuItem() instanceof ComboItem)) {
      var combos = this.allItems.filter(i => i instanceof ComboItem).slice(0,2);
      if (combos.length) html += `<div class="combo-suggest"><h3>💡 Save with a Combo!</h3>${combos.map(c =>
        `<div class="combo-suggest-item"><div><div class="cs-name">${c.getName()}</div><div class="cs-savings">Save ₹${c.getSavings()}</div></div>
        <button class="cs-add" onclick="KioskApp.addToCart('${c.getId()}')">+ Add ₹${c.getPrice()}</button></div>`).join('')}</div>`;
    }
    html += `<div class="cart-summary">
      <div class="summary-row"><span>Subtotal</span><span>₹${this.cart.getSubtotal().toFixed(2)}</span></div>
      <div class="summary-row"><span>CGST @ 2.5%</span><span>₹${this.cart.getCGST().toFixed(2)}</span></div>
      <div class="summary-row"><span>SGST @ 2.5%</span><span>₹${this.cart.getSGST().toFixed(2)}</span></div>
      <div class="summary-row total"><span>Grand Total</span><span>₹${this.cart.getGrandTotal().toFixed(2)}</span></div></div>`;
    content.innerHTML = html; footer.style.display = 'flex';
    document.getElementById('cfGrandTotal').textContent = '₹'+this.cart.getGrandTotal().toFixed(2);
  }

  placeOrder() {
    if (this.cart.isEmpty()) return;
    var order = new Order(this.cart);           // OBJECT of Order class
    var bill = order.confirm();                 // Order creates Bill
    document.getElementById('billReceipt').innerHTML = bill.generateReceiptHTML();
    this.navigateTo('bill');
  }

  newOrder() { this.cart.clear(); this.badges(); this.navigateTo('welcome'); }

  badges() { var n = this.cart.getItemCount(); document.querySelectorAll('.cart-badge').forEach(b => { b.textContent = n; b.classList.toggle('show', n > 0); }); }
  bottomBar() { var bar = document.getElementById('bottomBar'), n = this.cart.getItemCount(); if (n>0) { bar.style.display='flex'; document.getElementById('bbItemCount').textContent=n; document.getElementById('bbTotal').textContent='₹'+this.cart.getGrandTotal().toFixed(2); } else bar.style.display='none'; }
  toast(msg) { var t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2000); }
}

// START APP
var KioskApp = new KioskController();
