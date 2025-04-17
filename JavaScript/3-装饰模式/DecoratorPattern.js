/**
 * 一个咖啡店系统，基础咖啡可以添加多种调料（牛奶、糖、奶油），每加一种调料，价格和描述都会动态变化。
 * 使用装饰器模式可以灵活组合咖啡和调料，而无需修改原有代码。
 * 
 * 优势：
 * 把类中的装饰功能从类中搬移去除，这样可以简化原有的类
 * 有效地把类的核心职责和装饰功能区分开了，可以去除相关类中重复的装饰逻辑
 * 
 * 适用场景：
 * 需要动态扩展对象的功能，或扩展的功能需要灵活叠加
 */

/** 导入咖啡和装饰器类 */
const { Latte, Americano, MilkDecorator, SugarDecorator, CreamDecorator } = require('./Coffee');

// 使用示例

// 美式咖啡
let coffee1 = new Americano();
console.log(`${coffee1.description()}，价格：${coffee1.cost()} 元`); // 25 元


// 美式咖啡 + 牛奶 + 糖 + 奶油
let coffee2 = new Americano()
  .addDecorator(MilkDecorator)
  .addDecorator(SugarDecorator)
  .addDecorator(CreamDecorator);

console.log(`${coffee2.description()}，价格：${coffee2.cost()} 元`); // 40 元

// 拿铁 + 牛奶 + 糖
let coffee3 = new Latte()
  .addDecorator(MilkDecorator)
  .addDecorator(SugarDecorator);

console.log(`${coffee3.description()}，价格：${coffee3.cost()} 元`); // 37 元
