/**
 * 策略模式 实现商场收银功能根据不同的促销策略来计算最终价格，支持正常、打折和满减
 * 
 * 在 'Context类' 中 'this.strategy' 维护一个 'Strategy实例'，通过 'setStrategy方法' 可以动态切换策略。
 * 
 * 适用场景：
 * 更适合需要动态切换算法的场景，通过组合实现高扩展性。
 */

/** 导入策略类 */
const { NormalStrategy, DiscountStrategy, FullReductionStrategy } = require("./PromotionStrategy");

// 上下文类（收银台）
class CashierContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
  
    setStrategy(strategy) {
        this.strategy = strategy;
    }
  
    calculate(price) {
        return this.strategy.calculate(price);
    }
}

// 使用示例
const normalStrategy = new NormalStrategy();
const discountStrategy = new DiscountStrategy(0.8);
const fullReductionStrategy = new FullReductionStrategy(300, 100);

const cashier = new CashierContext(normalStrategy);

console.log("正常收费:", cashier.calculate(500)); // 500

cashier.setStrategy(discountStrategy);
console.log("打 8 折:", cashier.calculate(500)); // 400

cashier.setStrategy(fullReductionStrategy);
console.log("满 300 减 100:", cashier.calculate(500)); // 400