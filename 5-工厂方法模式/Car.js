
/** 车 接口 */
class Car {
    drive() {
        throw new Error("子类必须实现 drive 方法");
    }
}

/** 轿车 */
class Sedan extends Car {
    drive() {
      console.log("驾驶轿车");
    }
}

/** SUV */
class SUV extends Car {
    drive() {
        console.log("驾驶SUV");
    }
}
  
/** 卡车 */
class Truck extends Car {
    drive() {
        console.log("驾驶卡车");
    }
}

module.exports = { Sedan, SUV, Truck };