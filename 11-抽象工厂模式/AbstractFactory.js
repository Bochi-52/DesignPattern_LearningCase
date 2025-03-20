/**
 * 抽象工厂接口，及具体工厂类
 */

/** 导入UI组件 */
const { LightButton, DarkButton, LightTextBox, DarkTextBox } = require("./UIComponent");

/** 抽象工厂接口 */
class ThemeFactory {
    createButton() {
        throw new Error("子类必须实现 createButton 方法");
    }

    createTextBox() {
        throw new Error("子类必须实现 createTextBox 方法");
    }
}


/** Light 主题工厂 */
class LightThemeFactory extends ThemeFactory {
    createButton() {
        return new LightButton();
    }

    createTextBox() {
        return new LightTextBox();
    }
}

/** Dark 主题工厂 */
class DarkThemeFactory extends ThemeFactory {
    createButton() {
        return new DarkButton();
    }

    createTextBox() {
        return new DarkTextBox();
    }
}

/**
 * 反射（Reflection） 在运行时动态获取和操作对象的属性和方法。
 * 
 * 性能问题：反射操作（如 eval）可能影响性能，需谨慎使用。
 * 安全性问题：eval 会执行任意代码，可能存在安全风险。
 * 可读性：反射代码可能较难理解和维护。
 */

/** 动态抽象工厂 
 * @param {string} theme 主题名称（如 "Light" 或 "Dark"）
*/
class DynamicThemeFactory extends ThemeFactory {
    constructor(theme) {
        super();
        this.theme = theme;
    }

    // eval() 函数用于执行字符串形式的 JavaScript 代码。

    createButton() {
        const ButtonClass = eval(`${this.theme}Button`); // 动态获取按钮类
        return new ButtonClass();
    }

    createTextBox() {
        const TextBoxClass = eval(`${this.theme}TextBox`); // 动态获取文本框类
        return new TextBoxClass();
    }
}

/**
 * 可以通过一个 类名注册表 来动态获取产品类，避免使用 eval。
 */

/** 类名注册表 */
// const classRegistry = {
//     LightButton,
//     DarkButton,
//     LightTextBox,
//     DarkTextBox,
// };

/** 动态抽象工厂 */
// class DynamicThemeFactory_WithOutEval extends ThemeFactory {
//     constructor(theme) {
//         super();
//         this.theme = theme;
//     }

//     // eval() 函数用于执行字符串形式的 JavaScript 代码。

//     createButton() {
//         const ButtonClass = classRegistry[`${this.theme}Button`];
//         return new ButtonClass();
//     }

//     createTextBox() {
//         const ButtonClass = classRegistry[`${this.theme}TextBox`];
//         return new TextBoxClass();
//     }
// }


module.exports = { LightThemeFactory, DarkThemeFactory, DynamicThemeFactory };