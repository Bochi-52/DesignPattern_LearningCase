/**
 * 假设我们需要实现一个简单的购物车系统，支持以下功能：
 * 添加商品到购物车。
 * 计算购物车中商品的总价。
 * 应用折扣。
 * 
 * 函数式编程 来实现这个系统。
 * 
 * 核心思想:
 * 使用纯函数（无副作用）来操作数据。
 * 数据不可变（Immutable），每次操作返回新的数据。
 * 通过高阶函数（如 map、reduce）处理集合。
 * 
 * 优势:
 * 无副作用：纯函数不会修改外部状态，易于测试和调试。
 * 不可变数据：避免数据被意外修改，提高代码的可靠性。
 * 简洁性：通过高阶函数（如 map、reduce）简化集合操作。
 */

/** 商品数据 */
const products = [
    { id: 1, name: "Apple", price: 1.0 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Orange", price: 0.8 },
];
  
/** 购物车数据 */
let cart = [];

/** 添加商品到购物车 */
const addToCart = (cart, productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
        return [...cart, product]; // 返回新的购物车（不可变）
    }
    return cart;
};

/** 计算购物车总价 */
const calculateTotal = cart => {
    return cart.reduce((total, product) => total + product.price, 0);
};

/** 应用折扣*/
const applyDiscount = (total, discount) => {
    return total * (1 - discount);
};

// 使用示例
cart = addToCart(cart, 1); // 添加 Apple
cart = addToCart(cart, 2); // 添加 Banana
cart = addToCart(cart, 3); // 添加 Orange

const total = calculateTotal(cart); // 计算总价
const discountedTotal = applyDiscount(total, 0.1); // 应用 10% 折扣

console.log("购物车商品:", cart);
console.log("总价:", total);
console.log("折扣后总价:", discountedTotal);