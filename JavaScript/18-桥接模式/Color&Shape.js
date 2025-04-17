/** 颜色接口 */
class Color {
    applyColor() {
        throw new Error("子类必须实现 applyColor 方法");
    }
}

/** 红色 */
class Red extends Color {
    applyColor() {
        return "红色";
    }
}

/** 蓝色 */
class Blue extends Color {
    applyColor() {
        return "蓝色";
    }
}

/** 形状接口 */
class Shape {
    constructor(color) {
        this.color = color; // 组合颜色对象
    }
  
    draw() {
        throw new Error("子类必须实现 draw 方法");
    }
}

/** 圆形 */
class Circle extends Shape {
    draw() {
        console.log(`绘制 ${this.color.applyColor()} 的圆形`);
    }
}

/** 矩形 */
class Rectangle extends Shape {
    draw() {
        console.log(`绘制 ${this.color.applyColor()} 的矩形`);
    }
}

module.exports = { Red, Blue, Circle, Rectangle };