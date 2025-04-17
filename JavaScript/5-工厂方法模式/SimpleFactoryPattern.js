/**
 * 一个汽车制造系统，需要生产不同类型的汽车（如轿车、SUV、卡车）。
 * 
 * 简单工厂模式 的实现
 */

/** 导入汽车类 */
const { Sedan, SUV, Truck } = require("./Car");

/** 简单工厂模式的实现 */
class SimpleCarFactory {
    static createCar(type) {
        switch (type) {
            case "sedan":
                return new Sedan();
            case "suv":
                return new SUV();
            case "truck":
                return new Truck();
            default:
                throw new Error("不支持的汽车类型");
        }
    }
}

// 使用示例

const sedan = SimpleCarFactory.createCar("sedan");
sedan.drive(); // 输出: 驾驶轿车

const suv = SimpleCarFactory.createCar("suv");
suv.drive(); // 输出: 驾驶SUV

const truck = SimpleCarFactory.createCar("truck");
truck.drive(); // 输出: 驾驶卡车