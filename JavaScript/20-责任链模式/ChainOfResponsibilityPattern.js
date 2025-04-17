/**
 * 一个日志系统，支持多种日志级别（如 INFO、DEBUG、ERROR）。
 * 每个日志级别由不同的处理器处理，如果当前处理器无法处理，则将日志传递给下一个处理器。
 * 使用 职责链模式 可以将多个处理器连接成一条链，从而实现灵活的日志处理。
 * 
 * 核心思想：
 * 链式处理：将多个处理器连接成一条链，每个处理器负责处理特定的请求。
 * 解耦：请求的发送者和处理者之间解耦，客户端无需关心具体的处理逻辑。
 * 灵活性：可以动态调整处理链，支持多种处理逻辑。
 * 
 * 适用场景：
 * 多级处理：当请求需要经过多个处理步骤时。
 * 动态处理：当处理逻辑需要动态调整时。
 * 解耦：当需要将请求的发送者和处理者解耦时。
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