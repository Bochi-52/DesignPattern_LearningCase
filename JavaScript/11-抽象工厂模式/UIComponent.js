/**
 * UI组件接口 和 具体UI组件类
 */
 
/** 按钮接口 */
class Button {
    render() {
        throw new Error("子类必须实现 render 方法");
    }
}

/** Light 主题按钮 */
class LightButton extends Button {
    render() {
        console.log("渲染 Light 主题按钮");
    }
}

/** Dark 主题按钮 */
class DarkButton extends Button {
    render() {
        console.log("渲染 Dark 主题按钮");
    }
}

/** 文本框接口 */
class TextBox {
    render() {
        throw new Error("子类必须实现 render 方法");
    }
}

/** Light 主题文本框 */
class LightTextBox extends TextBox {
    render() {
        console.log("渲染 Light 主题文本框");
    }
}
 
/** Dark 主题文本框 */
class DarkTextBox extends TextBox {
    render() {
        console.log("渲染 Dark 主题文本框");
    }
}


module.exports = { LightButton, DarkButton, LightTextBox, DarkTextBox };