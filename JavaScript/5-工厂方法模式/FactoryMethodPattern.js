/**
 * 一个汽车制造系统，需要生产不同类型的汽车（如轿车、SUV、卡车）。
 * 
 * 使用 工厂方法模式 可以让每个具体的工厂类负责创建一种特定类型的汽车，
 * 而不是像 简单工厂模式 将所有创建逻辑集中在一个工厂类中。
 * 
 *              工厂方法模式；                               简单工厂模式
 * 核心思想  每个具体工厂负责创建一种产品；                一个工厂类负责创建所有产品。
 * 扩展性    新增产品时只需新增工厂类，符合开闭原则；       添加新产品时需要修改工厂类，违反了开闭原则。
 * 复杂度    需要更多的类，结构更复杂；                    结构简单，易于理解。
 * 适用场景  产品种类多且可能频繁扩展；                    产品种类固定且不频繁扩展。
 * 灵活性    更灵活，支持动态切换工厂；                    灵活性较低，集中管理所有逻辑。
 */

/** 导入汽车类 */
const { Sedan, SUV, Truck } = require("./Car");

/** 车辆工厂接口 */
class CarFactory {
    createCar() {
        throw new Error("子类必须实现 createCar 方法");
    }
}

/** 轿车工厂 */
class SedanFactory extends CarFactory {
    createCar() {
        return new Sedan();
    }
}
  
/** SUV工厂 */
class SUVFactory extends CarFactory {
    createCar() {
        return new SUV();
    }
}

/** 卡车工厂 */
class TruckFactory extends CarFactory {
    createCar() {
        return new Truck();
    }
}

// 使用示例

// 创建轿车工厂
const sedanFactory = new SedanFactory();
const sedan = sedanFactory.createCar();
sedan.drive(); // 输出: 驾驶轿车

// 创建SUV工厂
const suvFactory = new SUVFactory();
const suv = suvFactory.createCar();
suv.drive(); // 输出: 驾驶SUV

// 创建卡车工厂
const truckFactory = new TruckFactory();
const truck = truckFactory.createCar();
truck.drive(); // 输出: 驾驶卡车