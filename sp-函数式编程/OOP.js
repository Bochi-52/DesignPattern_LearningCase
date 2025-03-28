/**
 * 假设我们需要实现一个简单的购物车系统，支持以下功能：
 * 添加商品到购物车。
 * 计算购物车中商品的总价。
 * 应用折扣。
 * 
 * 面向对象编程 来实现这个系统。
 * 
 * 核心思想:
 * 使用类和对象来封装数据和行为。
 * 通过方法操作对象的状态。
 * 强调封装、继承和多态。
 * 
 * 优势:
 * 封装性：通过类和对象封装数据和行为，提高代码的可维护性。
 * 继承和多态：通过继承和多态实现代码复用和扩展。
 * 适合复杂逻辑：适合处理复杂的业务逻辑和状态管理。
 */

/** 商品类 */
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

/** 购物车类 */
class ShoppingCart {
    constructor() {
        this.items = []; // 购物车中的商品
    }

    // 添加商品
    addProduct(product) {
        this.items.push(product);
    }

    // 计算总价
    calculateTotal() {
        return this.items.reduce((total, product) => total + product.price, 0);
    }

    // 应用折扣
    applyDiscount(discount) {
        const total = this.calculateTotal();
        return total * (1 - discount);
    }
}

// 使用示例
const cart = new ShoppingCart();

const apple = new Product(1, "Apple", 1.0);
const banana = new Product(2, "Banana", 0.5);
const orange = new Product(3, "Orange", 0.8);

cart.addProduct(apple); // 添加 Apple
cart.addProduct(banana); // 添加 Banana
cart.addProduct(orange); // 添加 Orange

const total = cart.calculateTotal(); // 计算总价
const discountedTotal = cart.applyDiscount(0.1); // 应用 10% 折扣

console.log("购物车商品:", cart.items);
console.log("总价:", total);
console.log("折扣后总价:", discountedTotal);