/**
 * 解析一个简单的布尔表达式（如 true AND false 或 true OR false），并根据表达式的值返回结果。
 * 使用 解释器模式 可以将表达式的解析逻辑封装为对象，从而实现灵活的表达式解析。
 * 
 * 适用场景：
 * 语法解析：当需要解析特定语法（如布尔表达式、数学表达式）时。
 * 规则引擎：当需要实现规则引擎或条件判断时。
 * 
 * 通常当有一个语言需要解释执行，并且你可将该语言中的句子表示为一个抽象语法树时，可使用解释器模式。
 */

/** 导入表达式 */
const { Constant, AndExpression, OrExpression } = require('./Expression');

/** 上下文 */
class Context {
    constructor() {
        this.variables = {}; // 存储变量
    }

    // 设置变量值
    setVariable(name, value) {
        this.variables[name] = value;
    }

    // 获取变量值
    getVariable(name) {
        return this.variables[name];
    }
}


// 使用示例

// 创建上下文
const context = new Context();
context.setVariable("x", true);
context.setVariable("y", false);

// 创建 常量 表达式
const expression1 = new Constant(context.getVariable("x")); // x = true
const expression2 = new Constant(context.getVariable("y")); // y = false

// 创建 AND 表达式
const andExpression = new AndExpression(expression1, expression2);
console.log("x AND y:", andExpression.interpret(context));  // 输出: x AND y: false

// 创建 OR 表达式
const orExpression = new OrExpression(expression1, expression2);
console.log("x OR y:", orExpression.interpret(context));    // 输出: x OR y: true