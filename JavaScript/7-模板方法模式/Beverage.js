/**
 * 饮料接口，和具体实现
 * 
 * 使用 模板方法模式 将公共步骤放在父类中，而将具体步骤的实现延迟到子类中。
 */

/** 饮料接口 */
class Beverage {
    // 模板方法：定义制作饮料的流程
    prepare() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    // 公共步骤：烧水
    boilWater() {
        console.log("烧水");
    }
  
    // 抽象方法：冲泡（由子类实现）
    brew() {
        throw new Error("子类必须实现 brew 方法");
    }
  
    // 公共步骤：倒入杯子
    pourInCup() {
        console.log("倒入杯子");
    }
  
    // 抽象方法：加调料（由子类实现）
    addCondiments() {
        throw new Error("子类必须实现 addCondiments 方法");
    }
}

/** 咖啡 */
class Coffee extends Beverage {
    brew() {
        console.log("冲泡咖啡粉");
    }
  
    addCondiments() {
        console.log("加糖和牛奶");
    }
}

/** 茶 */
class Tea extends Beverage {
    brew() {
        console.log("浸泡茶叶");
    }

    addCondiments() {
        console.log("加柠檬");
    }
}

module.exports = { Coffee, Tea };