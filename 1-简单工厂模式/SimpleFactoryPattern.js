/**
 * 简单工厂模式
 * 定义一个创建对象的工厂函数，根据传入的类型参数动态创建对象，返回不同类的实例。
 * 
 * 优缺点：
 * 当需要创建的对象很多，导致对象的new操作多且杂时，可以使用简单工厂模式；
 * 工厂类集中了所有实例的创建逻辑，违反了高内聚责任分配原则，将全部创建逻辑集中到了一个工厂类中；
 * 
 * 适用场景：
 * 工厂类负责创建的对象比较少；
 * 只知道传入工厂类的参数，对于如何创建对象（逻辑）不关心；
 */

/** 导入操作类 */
const { AddOperation, SubtractOperation, MultiplyOperation, DivideOperation } = require("./Operation");

/** 简单工厂函数 
 * @param {string} operator 运算符
 * @param {number} num1 第一个数字
 * @param {number} num2 第二个数字
*/
function operationFactory(operator, num1, num2) {
    switch (operator) {
        case "+":
            return new AddOperation(num1, num2);
        case "-":
            return new SubtractOperation(num1, num2);
        case "*":
            return new MultiplyOperation(num1, num2);
        case "/":
            return new DivideOperation(num1, num2);

        /** 此处 需要其他 运算符 比如 平方、取余等，都可以去 Operation.js 文件中添加相应的类
         * 添加类后，在这里添加 case 语句即可
         */

        default:
            throw new Error("不支持的运算符");
    }
}

/** 使用工厂模式创建计算器 */
function calculator(operator, num1, num2) {
    const operation = operationFactory(operator, num1, num2);
    return operation.getResult();
}

// 测试
console.log(calculator("+", 10, 5)); // 输出: 15
console.log(calculator("-", 10, 5)); // 输出: 5
console.log(calculator("*", 10, 5)); // 输出: 50
console.log(calculator("/", 10, 5)); // 输出: 2