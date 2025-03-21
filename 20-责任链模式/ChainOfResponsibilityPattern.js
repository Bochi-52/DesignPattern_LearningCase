/**
 * 一个日志系统，支持多种日志级别（如 INFO、DEBUG、ERROR）。
 * 每个日志级别由不同的处理器处理，如果当前处理器无法处理，则将日志传递给下一个处理器。
 * 使用 职责链模式 可以将多个处理器连接成一条链，从而实现灵活的日志处理。
 */

/**  导入日志处理器类 */
const { InfoLogger, DebugLogger, ErrorLogger } = require('./Logger');


// 使用示例

// 创建处理器链
const infoLogger = new InfoLogger();
const debugLogger = new DebugLogger();
const errorLogger = new ErrorLogger();

infoLogger.setNextLogger(debugLogger);
debugLogger.setNextLogger(errorLogger);

// 处理日志
infoLogger.logMessage(1, "这是一条 INFO 日志");     // 输出: INFO: 这是一条 INFO 日志
infoLogger.logMessage(2, "这是一条 DEBUG 日志");    // 输出: DEBUG: 这是一条 DEBUG 日志
infoLogger.logMessage(3, "这是一条 ERROR 日志");    // 输出: ERROR: 这是一条 ERROR 日志