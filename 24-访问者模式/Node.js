/** 节点接口 */
class Node {
    accept(visitor) {
        throw new Error("子类必须实现 accept 方法");
    }
}

/** 元素节点 */
class ElementNode extends Node {
    constructor(name) {
        super();
        this.name = name;   // 元素名称
        this.children = []; // 子节点
    }

    // 添加子节点
    addChild(child) {
        this.children.push(child);
    }

    // 接受访问者
    accept(visitor) {
        visitor.visitElement(this); // 调用访问者的 visitElement 方法
        this.children.forEach(child => child.accept(visitor)); // 递归访问子节点
    }
}

/** 文本节点 */
class TextNode extends Node {
    constructor(text) {
        super();
        this.text = text; // 文本内容
    }

    // 接受访问者
    accept(visitor) {
        visitor.visitText(this); // 调用访问者的 visitText 方法
    }
}

module.exports = { ElementNode, TextNode };