/**
 * 简单工厂模式 实现商场收银功能根据不同的促销策略来计算最终价格，支持正常、打折和满减
 * 
 * 需要再客户端判断促销类型并传入相应的参数
 */

/** 导入策略类 */
const { NormalStrategy, DiscountStrategy, FullReductionStrategy } = require("./PromotionStrategy");

/** 促销策略工厂类 */
class PromotionFactory {
    static createPromotion(type, ...args) {
        switch (type) {
            case "normal":
                return new NormalStrategy();
            case "discount":
                return new DiscountStrategy(args[0]);
            case "fullReduction":
                return new FullReductionStrategy(args[0], args[1]);
            default:
                throw new Error("不支持的促销类型");
        }
    }
}
  
// 使用示例
function cashier(price, promotionType, ...args) {
    const strategy = PromotionFactory.createPromotion(promotionType, ...args);
    return strategy.calculate(price);
}

console.log("正常收费:", cashier(500, "normal")); // 500
console.log("打 8 折:", cashier(500, "discount", 0.8)); // 400
console.log("满 300 减 100:", cashier(500, "fullReduction", 300, 100)); // 400