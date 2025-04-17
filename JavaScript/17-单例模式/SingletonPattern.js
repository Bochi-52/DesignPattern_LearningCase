/**
 * 一个日志记录器，用于记录应用程序的日志，为了确保日志记录器的唯一性，避免重复创建和资源浪费。
 * 使用 单例模式 来保证全局只有一个日志记录器实例。
 */

/** 导入日志类、配置管理类 */
const { Logger, ConfigManager } = require('./Logger');


// 使用示例1

const logger1 = new Logger();   // 创建日志记录器实例
logger1.log("第一条日志");

const logger2 = new Logger();   // 尝试创建另一个日志记录器实例
logger2.log("第二条日志");

logger1.printLogs();            // 打印所有日志

// 输出:
// 日志: 第一条日志
// 日志: 第二条日志
// 所有日志:
// 第一条日志
// 第二条日志

// 检查是否是同一个实例
console.log(logger1 === logger2); // 输出: true


// 使用示例2

const configManager1 = new ConfigManager(); // 创建配置管理器实例
configManager1.set("theme", "dark");

const configManager2 = new ConfigManager(); // 尝试创建另一个配置管理器实例
configManager2.set("language", "zh-CN");

// 获取配置
configManager1.printAll();

// 检查是否是同一个实例
console.log(configManager1 === configManager2); // 输出: true