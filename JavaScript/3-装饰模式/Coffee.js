/**
 * 咖啡类接口，和具体实现；
 */

/** 咖啡接口 */
class Coffee {
    cost() {
        throw new Error("子类必须实现 cost 方法");
    }
    description() {
        throw new Error("子类必须实现 description 方法");
    }

    // 添加装饰器的方法
    addDecorator(decorator) {
        return new decorator(this); // 返回装饰后的对象
    }
}

/** 拿铁咖啡 */
class Latte extends Coffee {
    cost() {
        return 30; // 基础价格 30 元
    }
    description() {
        return "拿铁咖啡";
    }
}

/** 美式咖啡 */
class Americano extends Coffee {
    cost() {
        return 25; // 基础价格 25 元
    }
    description() {
        return "美式咖啡";
    }
}

/**
 * 装饰器基类，和具体实现；
 */

/** 咖啡装饰器基类 */
class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this._coffee = coffee; // 持有被装饰的咖啡对象
    }

    cost() {
        return this._coffee.cost();
    }
    description() {
        return this._coffee.description();
    }
}

/** 牛奶装饰器 */
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this._coffee.cost() + 5; // 牛奶价格 +5 元
    }
    description() {
        return this._coffee.description() + " + 牛奶";
    }
}

/** 糖装饰器 */
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this._coffee.cost() + 2; // 糖价格 +2 元
    }
    description() {
        return this._coffee.description() + " + 糖";
    }
}

/** 奶油装饰器 */
class CreamDecorator extends CoffeeDecorator {
    cost() {
        return this._coffee.cost() + 8; // 奶油价格 +8 元
    }
    description() {
        return this._coffee.description() + " + 奶油";
    }
}

module.exports = { Latte, Americano, MilkDecorator, SugarDecorator, CreamDecorator };