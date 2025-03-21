/** 日志处理器接口 */
class Logger {
    constructor(level) {
        this.level = level;     // 日志级别
        this.nextLogger = null; // 下一个处理器
    }

    // 设置下一个处理器
    setNextLogger(nextLogger) {
        this.nextLogger = nextLogger;
    }

    // 处理日志
    logMessage(level, message) {
        if (this.level <= level) {
            this.write(message);                        // 如果当前处理器可以处理，则处理日志
        } else if (this.nextLogger) {
            this.nextLogger.logMessage(level, message); // 否则传递给下一个处理器
        }
    }

    // 写入日志（由子类实现）
    write(message) {
        throw new Error("子类必须实现 write 方法");
    }
}

/** INFO 级别处理器 */
class InfoLogger extends Logger {
    constructor() {
        super(1); // INFO 级别
    }

    write(message) {
        console.log(`INFO: ${message}`);
    }
}

/** DEBUG 级别处理器 */
class DebugLogger extends Logger {
    constructor() {
        super(2); // DEBUG 级别
    }

    write(message) {
        console.log(`DEBUG: ${message}`);
    }
}

/** ERROR 级别处理器 */
class ErrorLogger extends Logger {
    constructor() {
        super(3); // ERROR 级别
    }

    write(message) {
        console.log(`ERROR: ${message}`);
    }
}

module.exports = { InfoLogger, DebugLogger, ErrorLogger };