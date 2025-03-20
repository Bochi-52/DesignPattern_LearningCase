/**
 * 适有一个旧的日志系统，接口与新系统不兼容。
 * 旧系统的日志方法是 logMessage(message)，而新系统的日志方法是 log(info)，其中 info 是一个包含日志级别和消息的对象。
 * 使用 适配器模式 可以让旧系统与新系统协同工作。
 * 
 * 核心思想：
 * 兼容性：通过适配器让不兼容的接口协同工作。
 * 解耦：将适配逻辑封装在适配器中，客户端无需关心具体的实现。
 * 复用性：可以在不修改现有代码的情况下复用旧系统
 * 
 * 适用场景:
 * 新旧系统兼容：当需要将旧系统与新系统集成时。
 * 接口不匹配：当现有接口与目标接口不匹配时。
 * 复用旧代码：当需要复用旧代码但无法直接修改时。
 */

/** 旧日志系统 */
class OldLogger {
    logMessage(message) {
        console.log(`旧日志系统: ${message}`);
    }
}

/** 新日志系统 */
class NewLogger {
    log(info) {
        console.log(`新日志系统: [${info.level}] ${info.message}`);
    }
}

/** 适配器类 */
class LoggerAdapter {
    constructor(oldLogger) {
        this.oldLogger = oldLogger;
    }
  
    log(info) {
        // 将新系统的日志格式转换为旧系统的格式
        const message = `[${info.level}] ${info.message}`;
        this.oldLogger.logMessage(message);
    }
}


// 使用示例
const oldLogger = new OldLogger();             // 创建旧日志系统
const adapter = new LoggerAdapter(oldLogger);  // 创建适配器

// 使用适配器调用新系统的日志方法
adapter.log({ level: "INFO", message: "这是一条信息日志" });
// 输出: 旧日志系统: [INFO] 这是一条信息日志

adapter.log({ level: "ERROR", message: "这是一条错误日志" });
// 输出: 旧日志系统: [ERROR] 这是一条错误日志