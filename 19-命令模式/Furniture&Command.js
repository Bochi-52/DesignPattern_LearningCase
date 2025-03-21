/** 灯 */
class Light {
    on() {
        console.log("灯已打开");
    }

    off() {
        console.log("灯已关闭");
    }
}

/** 风扇 */
class Fan {
    on() {
        console.log("风扇已打开");
    }

    off() {
        console.log("风扇已关闭");
    }
}


/** 命令接口 */
class Command {
    execute() {
        throw new Error("子类必须实现 execute 方法");
    }

    undo() {
        throw new Error("子类必须实现 undo 方法");
    }
}

/** 开灯命令 */
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light; // 接收灯对象
    }

    execute() {
        this.light.on(); // 执行开灯操作
    }

    undo() {
        this.light.off(); // 执行关灯操作
    }
}

/** 关灯命令 */
class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light; // 接收灯对象
    }

    execute() {
        this.light.off(); // 执行关灯操作
    }

    undo() {
        this.light.on(); // 执行开灯操作
    }
}

/** 开风扇命令 */
class FanOnCommand extends Command {
    constructor(fan) {
        super();
        this.fan = fan; // 接收风扇对象
    }

    execute() {
        this.fan.on(); // 执行开风扇操作
    }

    undo() {
        this.fan.off(); // 执行关风扇操作
    }
}

/** 关风扇命令 */
class FanOffCommand extends Command {
    constructor(fan) {
        super();
        this.fan = fan; // 接收风扇对象
    }

    execute() {
        this.fan.off(); // 执行关风扇操作
    }

    undo() {
        this.fan.on(); // 执行开风扇操作
    }
}

module.exports = { Light, Fan, LightOnCommand, LightOffCommand, FanOnCommand, FanOffCommand };