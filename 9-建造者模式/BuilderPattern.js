/**
 * 构建一台电脑，电脑的配置可能非常复杂（如 CPU、内存、硬盘、显卡等），并且不同的用户可能有不同的需求。
 * 使用 建造者模式 可以将对象的构建过程分解为多个步骤，并通过一个指挥者（Director）来控制构建过程。
 * 
 * 核心思想:
 * 分步构建：将复杂对象的构建过程分解为多个步骤，每个步骤由建造者负责。
 * 灵活组合：通过不同的建造者实现，可以构建出不同的对象。
 * 解耦：将对象的构建过程与表示分离，客户端只需与指挥者交互。
 * 
 * 适用场景:
 * 复杂对象：当需要构建的对象非常复杂，且构建过程需要分步骤完成时。
 * 灵活配置：当需要构建的对象有多种配置，且配置可能频繁变化时。
 * 解耦构建过程：当需要将对象的构建过程与表示分离时。
 */

/** 导入 建造者、指挥者 */
const { ConcreteComputerBuilder, ComputerDirector } = require('./Computer');


// 使用示例
const concreteComputerBuilder = new ConcreteComputerBuilder();  // 创建建造者
const director = new ComputerDirector(concreteComputerBuilder); // 创建指挥者

const gamingComputer = director.constructGamingComputer();      // 构建游戏电脑
console.log(gamingComputer.toString());  // 输出: 电脑配置: CPU=Intel i9, RAM=32GB, 存储=1TB SSD, GPU=NVIDIA RTX 3080

const officeComputer = director.constructOfficeComputer();      // 构建办公电脑
console.log(officeComputer.toString());  // 输出: 电脑配置: CPU=Intel i5, RAM=16GB, 存储=512GB SSD, GPU=Integrated Graphics