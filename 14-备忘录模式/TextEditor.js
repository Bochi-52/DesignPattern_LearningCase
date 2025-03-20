/** 备忘录类 */
class EditorMemento {
    constructor(content) {
        this.content = content; // 保存的文本内容
    }

    getContent() {
        return this.content;
    }
}

/** 文本编辑器类 */
class TextEditor {
    constructor() {
        this.content = ""; // 当前文本内容
    }

    // 输入文本
    type(text) {
        this.content += text;
    }

    // 保存当前状态
    save() {
        return new EditorMemento(this.content);
    }

    // 恢复状态
    restore(memento) {
        this.content = memento.getContent();
    }

    // 获取当前内容
    getContent() {
        return this.content;
    }
}

/** 管理者类 */
class History {
    constructor() {
        this.mementos = []; // 保存备忘录的列表
    }

    // 添加备忘录
    push(memento) {
        this.mementos.push(memento);
    }

    // 获取最近的备忘录
    pop() {
        return this.mementos.pop();
    }
}

module.exports = { TextEditor, History };