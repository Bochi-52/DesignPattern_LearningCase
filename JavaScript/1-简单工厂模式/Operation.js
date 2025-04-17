/**
 * 操作类接口，和具体实现
 */

/** 定义计算操作的基类 */
class Operation {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // 计算结果的方法（由子类实现）
    getResult() {
        throw new Error("子类必须实现 getResult 方法");
    }
}

/** 加法操作 */
class AddOperation extends Operation {
    getResult() {
        return this.num1 + this.num2;
    }
}

/** 减法操作 */
class SubtractOperation extends Operation {
    getResult() {
        return this.num1 - this.num2;
    }
}

/** 乘法操作 */
class MultiplyOperation extends Operation {
    getResult() {
        return this.num1 * this.num2;
    }
}

/** 除法操作 */
class DivideOperation extends Operation {
    getResult() {
        if (this.num2 === 0) {
            throw new Error("除数不能为 0");
        }
        return this.num1 / this.num2;
    }
}

module.exports = { AddOperation, SubtractOperation, MultiplyOperation, DivideOperation };