/** 抽象表达式接口 */
class BooleanExpression {
    interpret(context) {
        throw new Error("子类必须实现 interpret 方法");
    }
}

/** 常量表达式（true 或 false） */
class Constant extends BooleanExpression {
    constructor(value) {
        super();
        this.value = value; // 常量值
    }

    interpret(context) {
        return this.value;
    }
}

/** AND 表达式 */
class AndExpression extends BooleanExpression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1; // 左表达式
        this.expression2 = expression2; // 右表达式
    }

    interpret(context) {
        return this.expression1.interpret(context) && this.expression2.interpret(context);
    }
}

/** OR 表达式 */
class OrExpression extends BooleanExpression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1; // 左表达式
        this.expression2 = expression2; // 右表达式
    }

    interpret(context) {
        return this.expression1.interpret(context) || this.expression2.interpret(context);
    }
}

module.exports = { Constant, AndExpression, OrExpression };