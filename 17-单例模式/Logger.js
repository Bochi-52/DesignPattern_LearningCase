/** 日志类 */
class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance; // 如果实例已存在，直接返回
        }
        this.logs = [];         // 存储日志
        Logger.instance = this; // 保存实例
    }

    // 记录日志
    log(message) {
        this.logs.push(message);
        console.log(`日志: ${message}`);
    }

    // 打印所有日志
    printLogs() {
        console.log("所有日志:");
        this.logs.forEach(log => console.log(log));
    }
}

// 确保单例
Logger.instance = null;


/**
 * 或者使用单例基类的方式，让需要单例的类继承该基类。
 * 
 * new.target 允许你检测函数或构造函数是否是通过 new 运算符被调用；
 * 子类继承父类时，new.target会返回子类。
 */

/** 单例模式类 */
class Singleton {
    constructor() {
        if (new.target.instance) {
            return new.target.instance; // 如果实例已存在，直接返回
        }

        new.target.instance = this; // 保存实例
        this.init();
    }

    /** 子类需要在结构函数中实现的逻辑，写在init方法中 */
    init() {
        throw new Error("未实现 init 方法");
    }
}

/** 配置管理类 */
class ConfigManager extends Singleton {

    init() {
        this.settings = {}; // 初始化配置
    }

    // 设置配置
    set(key, value) {
        this.settings[key] = value;
    }

    // 打印所有配置
    printAll() {
        console.log("所有配置:");
        for (let key in this.settings) {
            console.log(`${key}: ${this.settings[key]}`);
        }
    }
}

module.exports = { Logger, ConfigManager };