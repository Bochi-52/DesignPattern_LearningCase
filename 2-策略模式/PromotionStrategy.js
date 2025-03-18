/**
 * 促销策略接口，和具体实现
 */

/** 促销策略接口 */
class PromotionStrategy {
    calculate(price) {
      throw new Error("子类必须实现 calculate 方法");
    }
  }
  
/** 正常收费策略 */
class NormalStrategy extends PromotionStrategy {
    calculate(price) {
        return price;
    }
}

/** 打折收费策略 */
class DiscountStrategy extends PromotionStrategy {
    constructor(discountRate) {
        super();
        this.discountRate = discountRate; // 折扣率（0.8 表示 8 折）
    }

    calculate(price) {
        return price * this.discountRate;
    }
}

/** 满减收费策略 */
class FullReductionStrategy extends PromotionStrategy {
        constructor(fullAmount, reductionAmount) {
            super();
        this.fullAmount = fullAmount;    // 满减条件（如满 300）
        this.reductionAmount = reductionAmount; // 减去的金额（如减 100）
    }

    calculate(price) {
        if (price >= this.fullAmount) {
        return price - this.reductionAmount;
        }
        return price;
    }
}

module.exports = { NormalStrategy, DiscountStrategy, FullReductionStrategy };