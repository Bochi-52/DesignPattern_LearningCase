/**
 * 策略模式 + 简单工厂模式  实现商场收银功能根据不同的促销策略来计算最终价格，支持正常、打折和满减
 * 
 * 简单工厂：负责创建具体策略对象，隐藏创建细节。
 * 策略模式：负责管理策略的切换和执行，客户端通过上下文类(Context)操作策略。
 * 
 * 相比起策略模式，不需要客户端关心和创建具体策略对象，只需要传入策略类型和参数，由工厂类创建策略对象并返回即可
 */

/** 导入策略类 */
const { NormalStrategy, DiscountStrategy, FullReductionStrategy } = require("./PromotionStrategy");


/** 工厂类（创建策略对象） */
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

/** 上下文类（管理策略） */
class CashierContext {
    constructor() {
        this.strategy = null; // 初始策略为空
    }

    // 通过工厂设置策略
    setStrategyByType(promotionType, ...args) {
        this.strategy = PromotionFactory.createPromotion(promotionType, ...args);
    }

    // 直接设置策略对象（保留策略模式的灵活性）
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(price) {
        if (!this.strategy) {
            throw new Error("请先设置促销策略");
        }
        return this.strategy.calculate(price);
    }
}
  
// 使用示例
const cashier = new CashierContext();

// 方式1：通过工厂设置策略
cashier.setStrategyByType("discount", 0.8);
console.log("打8折:", cashier.calculate(500)); // 400

// 方式2：直接传入策略对象（兼容策略模式）
cashier.setStrategy(new FullReductionStrategy(300, 100));
console.log("满300减100:", cashier.calculate(500)); // 400

// 动态切换策略
cashier.setStrategyByType("normal");
console.log("正常收费:", cashier.calculate(500)); // 500