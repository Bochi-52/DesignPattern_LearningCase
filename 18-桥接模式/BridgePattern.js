/**
 * 一个图形绘制系统，支持多种形状（如圆形、矩形）和多种颜色（如红色、蓝色）。
 * 如果为每种形状和颜色的组合都创建一个类，会导致类爆炸（如 RedCircle、BlueCircle、RedRectangle 等）。
 * 使用 桥接模式 可以将形状和颜色分离，使它们可以独立变化。
 * 
 * 核心思想：
 * 分离抽象和实现：将抽象部分（形状）和实现部分（颜色）分离，使它们可以独立变化。
 * 组合优于继承：通过组合的方式将抽象部分和实现部分连接起来，避免类爆炸。
 * 扩展性：可以独立扩展抽象部分和实现部分，无需修改现有代码。
 * 
 * 适用场景：
 * 多维度变化：当系统中有多个独立变化的维度时（如形状和颜色）。
 * 避免类过多：当使用继承会导致类过多时。
 * 解耦：当需要将抽象部分和实现部分解耦时。
 */

/** 导入颜色和形状类 */
const { Red, Blue, Circle, Rectangle } = require("./Color&Shape");


// 使用示例

// 创建颜色对象
const red = new Red();
const blue = new Blue();

// 创建形状对象并组合颜色
const redCircle = new Circle(red);
const blueCircle = new Circle(blue);
const redRectangle = new Rectangle(red);
const blueRectangle = new Rectangle(blue);

// 绘制形状
redCircle.draw();       // 输出: 绘制 红色 的圆形
blueCircle.draw();      // 输出: 绘制 蓝色 的圆形
redRectangle.draw();    // 输出: 绘制 红色 的矩形
blueRectangle.draw();   // 输出: 绘制 蓝色 的矩形