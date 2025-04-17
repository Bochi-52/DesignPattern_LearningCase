/**
 * 交通信号灯状态接口、状态实现类、信号灯类。
 */

/** 交通信号灯状态接口 */
class TrafficLightState {
    handle(context) {
        throw new Error("子类必须实现 handle 方法");
    }
}

/** 红灯状态 */
class RedLightState extends TrafficLightState {
    handle(context) {
        console.log("红灯亮起，等待 10 秒");

        setTimeout(() => {
            context.setState(new GreenLightState()); // 切换到绿灯
        }, 10e3); // 10 秒后切换
    }
}

/** 绿灯状态 */
class GreenLightState extends TrafficLightState {
    handle(context) {
        console.log("绿灯亮起，等待 15 秒");

        setTimeout(() => {
            context.setState(new YellowLightState()); // 切换到黄灯
        }, 15e3); // 15 秒后切换
    }
}

/** 黄灯状态 */
class YellowLightState extends TrafficLightState {
    handle(context) {
        console.log("黄灯亮起，等待 5 秒");

        setTimeout(() => {
            context.setState(new RedLightState()); // 切换到红灯
        }, 5e3); // 5 秒后切换
    }
}

/** 交通信号灯 */
class TrafficLight {
    constructor() {
        this.state = new RedLightState(); // 初始状态为红灯
    }

    // 设置当前状态
    setState(state) {
        this.state = state;
        this.state.handle(this); // 调用新状态的处理方法
    }

    // 启动信号灯
    start() {
        this.state.handle(this);
    }
}

module.exports = { TrafficLight };