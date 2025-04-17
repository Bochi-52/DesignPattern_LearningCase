/**
 * 构建一台电脑，电脑的配置可能非常复杂（如 CPU、内存、硬盘、显卡等），并且不同的用户可能有不同的需求。
 * 使用 建造者模式 可以将对象的构建过程分解为多个步骤，并通过一个指挥者（Director）来控制构建过程。
 */

/** 电脑基类 */
class Computer {
    constructor() {
        this.cpu = null;
        this.ram = null;
        this.storage = null;
        this.gpu = null;
    }

    toString() {
        return `电脑配置: CPU=${this.cpu}, RAM=${this.ram}, 存储=${this.storage}, GPU=${this.gpu}`;
    }
}

/** 建造者接口 */
class ComputerBuilder {
    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu) {
        throw new Error("子类必须实现 setCPU 方法");
    }

    setRAM(ram) {
        throw new Error("子类必须实现 setRAM 方法");
    }

    setStorage(storage) {
        throw new Error("子类必须实现 setStorage 方法");
    }

    setGPU(gpu) {
        throw new Error("子类必须实现 setGPU 方法");
    }

    getResult() {
        return this.computer;
    }
}

/** 具体建造者 */
class ConcreteComputerBuilder extends ComputerBuilder {
    setCPU(cpu) {
        this.computer.cpu = cpu;
        return this; // 支持链式调用
    }

    setRAM(ram) {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage) {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu) {
        this.computer.gpu = gpu;
        return this;
    }
}

/** 建造指挥者 */
class ComputerDirector {
    constructor(builder) {
        this.builder = builder;
    }

    constructGamingComputer() {
        return this.builder
        .setCPU("Intel i9")
        .setRAM("32GB")
        .setStorage("1TB SSD")
        .setGPU("NVIDIA RTX 3080")
        .getResult();
    }

    constructOfficeComputer() {
        return this.builder
        .setCPU("Intel i5")
        .setRAM("16GB")
        .setStorage("512GB SSD")
        .setGPU("Integrated Graphics")
        .getResult();
    }
}

module.exports = { ConcreteComputerBuilder, ComputerDirector };