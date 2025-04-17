/**
 * 一个 UI 组件库，支持两种主题：Light（浅色主题）和 Dark（深色主题）。
 * 每种主题下有不同的 UI 组件（如按钮、文本框）。
 * 使用 抽象工厂模式 可以创建一组相关的 UI 组件，而无需关心具体的实现。
 * 
 * 动态创建对象：通过反射，可以动态创建产品对象，无需硬编码具体类。
 * 扩展性：新增主题时，只需新增产品类，无需修改工厂类。
 * 代码简洁：减少了工厂类中的重复代码。
 * 
 *                 抽象工厂模式                    工厂方法模式
 * 创建对象类型	    建一种产品	                    创建一组相关产品
 * 工厂类职责	    每个工厂类只负责创建一种产品	 每个工厂类负责创建一组相关产品
 * 扩展性	        新增产品时需要新增工厂类	     新增产品族时需要新增工厂类
 * 适用场景	        单一产品的创建	                一组相关产品的创建
 * 复杂度	        结构简单，易于理解	            结构复杂，适合复杂场景
 */

/** 导入抽象工厂 */
const { LightThemeFactory, DarkThemeFactory, DynamicThemeFactory } = require('./AbstractFactory');


// 使用示例

// 创建 Light 主题工厂
const lightFactory = new LightThemeFactory();
const lightButton = lightFactory.createButton();
const lightTextBox = lightFactory.createTextBox();

lightButton.render();   // 输出: 渲染 Light 主题按钮
lightTextBox.render();  // 输出: 渲染 Light 主题文本框

// 创建 Dark 主题工厂
const darkFactory = new DarkThemeFactory();
const darkButton = darkFactory.createButton();
const darkTextBox = darkFactory.createTextBox();

darkButton.render();    // 输出: 渲染 Dark 主题按钮
darkTextBox.render();   // 输出: 渲染 Dark 主题文本框


// 使用反射的方式
console.log("\n使用反射方式创建");

// 创建 Light 主题工厂
const lightFactory2 = new DynamicThemeFactory("Light");
const lightButton2 = lightFactory2.createButton();
const lightTextBox2 = lightFactory2.createTextBox();

lightButton2.render();  // 输出: 渲染 Light 主题按钮
lightTextBox2.render(); // 输出: 渲染 Light 主题文本框

// 创建 Dark 主题工厂
const darkFactory2 = new DynamicThemeFactory("Dark");
const darkButton2 = darkFactory2.createButton();
const darkTextBox2 = darkFactory2.createTextBox();

darkButton2.render();   // 输出: 渲染 Dark 主题按钮
darkTextBox2.render();  // 输出: 渲染 Dark 主题文本框