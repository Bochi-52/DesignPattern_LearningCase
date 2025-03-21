/**
 * 有一个文档对象模型（DOM），包含多种类型的节点（如元素节点、文本节点）。
 * 我们需要对不同类型的节点执行不同的操作（如渲染、导出）。
 * 使用 访问者模式 可以将操作逻辑从节点类中分离出来，从而实现解耦和扩展。
 * 核心思想：
 * 分离操作逻辑：将操作逻辑从节点类中分离出来，封装在访问者中。
 * 双重分派：通过 accept 方法和 visit 方法实现双重分派，支持动态绑定。
 * 扩展性：可以轻松扩展新的操作（如新的访问者），而无需修改节点类。
 * 
 * 适用场景：
 * 复杂对象结构：当需要对复杂对象结构执行多种操作时。
 * 解耦：当需要将操作逻辑与对象结构解耦时。
 * 扩展性：当需要支持动态扩展操作时。
 * 
 * 访问者模式增加了系统的复杂度，尤其是在对象结构复杂时。有当你真正需要它的时候，才考虑使用它。
 */

/** 导入节点 */
const { ElementNode, TextNode } = require("./Node");

/** 访问者接口 */
class Visitor {
    visitElement(element) {
        throw new Error("子类必须实现 visitElement 方法");
    }

    visitText(text) {
        throw new Error("子类必须实现 visitText 方法");
    }
}

/** 渲染访问者 */
class RenderVisitor extends Visitor {
    visitElement(element) {
        console.log(`渲染元素节点: <${element.name}>`);
    }

    visitText(text) {
        console.log(`渲染文本节点: "${text.text}"`);
    }
}

/** 导出访问者 */
class ExportVisitor extends Visitor {
    visitElement(element) {
        console.log(`导出元素节点: <${element.name}>`);
    }

    visitText(text) {
        console.log(`导出文本节点: "${text.text}"`);
    }
}


// 使用示例

// 创建文档对象模型
const root = new ElementNode("html");
const body = new ElementNode("body");
const title = new ElementNode("h1");
const text = new TextNode("Hello, World!");

// 构建 DOM 树
root.addChild(body);
body.addChild(title);
title.addChild(text);

// 创建访问者
const renderVisitor = new RenderVisitor();
const exportVisitor = new ExportVisitor();

// 渲染 DOM 树
root.accept(renderVisitor);
// 输出:
// 渲染元素节点: <html>
// 渲染元素节点: <body>
// 渲染元素节点: <h1>
// 渲染文本节点: "Hello, World!"

// 导出 DOM 树
root.accept(exportVisitor);
// 输出:
// 导出元素节点: <html>
// 导出元素节点: <body>
// 导出元素节点: <h1>
// 导出文本节点: "Hello, World!"