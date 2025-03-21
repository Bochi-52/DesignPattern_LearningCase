/**
 * 一个遥控器，可以控制多种家电（如灯、风扇）。每个按钮对应一个命令，按下按钮时会执行相应的操作。
 * 使用 命令模式 可以将命令封装为对象，从而实现解耦和扩展。
 * 
 * 核心思想：
 * 封装命令：将命令封装为对象，客户端无需关心具体的实现。
 * 解耦：将命令的发起者和执行者解耦，提高系统的灵活性。
 * 支持撤销：通过保存上一个命令，支持撤销操作。
 * 
 * 适用场景：
 * 命令队列：当需要支持命令队列或日志功能时。
 * 撤销操作：当需要支持撤销操作时。
 * 解耦：当需要将命令的发起者和执行者解耦时。
 */

/** 导入家电和命令类 */
const { Light, Fan, LightOnCommand, LightOffCommand, FanOnCommand, FanOffCommand } = require('./Furniture&Command');

/** 遥控器 */
class RemoteControl {
    constructor() {
        this.commands = []; // 存储命令
        this.history = []; // 存储命令历史
    }

    // 设置命令
    setCommand(index, command) {
        this.commands[index] = command;
    }

    // 按下按钮
    pressButton(index) {
        if (this.commands[index]) {
            this.commands[index].execute();
            this.history.push(this.commands[index]); // 将命令添加到历史
        }
    }

    // 按下撤销按钮
    pressUndoButton() {
        if (this.history.length > 0) {
            const lastCommand = this.history.pop(); // 获取最后一个命令
            lastCommand.undo(); // 执行撤销操作
        } else {
            console.log("没有更多命令可以撤销");
        }
    }
}


// 使用示例

// 创建家电对象
const light = new Light();
const fan = new Fan();

// 创建命令对象
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);
const fanOnCommand = new FanOnCommand(fan);
const fanOffCommand = new FanOffCommand(fan);

// 创建遥控器对象
const remoteControl = new RemoteControl();

// 设置命令
remoteControl.setCommand(0, lightOnCommand);    // 按钮 0: 开灯
remoteControl.setCommand(1, lightOffCommand);   // 按钮 1: 关灯
remoteControl.setCommand(2, fanOnCommand);      // 按钮 2: 开风扇
remoteControl.setCommand(3, fanOffCommand);     // 按钮 3: 关风扇

// 按下按钮
remoteControl.pressButton(0); // 输出: 灯已打开
remoteControl.pressButton(2); // 输出: 风扇已打开

// 按下撤销按钮
remoteControl.pressUndoButton(); // 输出: 风扇已关闭
remoteControl.pressUndoButton(); // 输出: 灯已关闭
remoteControl.pressUndoButton(); // 输出: 没有更多命令可以撤销