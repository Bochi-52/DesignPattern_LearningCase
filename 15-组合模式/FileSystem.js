/** 文件组件接口 */
class FileSystemComponent {
    constructor(name) {
        this.name = name;
    }

    // 添加组件
    add(component) {
        throw new Error("子类必须实现 add 方法");
    }

    // 删除组件
    remove(component) {
        throw new Error("子类必须实现 remove 方法");
    }

    // 显示组件信息
    display() {
        throw new Error("子类必须实现 display 方法");
    }
}

/** 文件（叶子节点） */
class File extends FileSystemComponent {
    constructor(name) {
        super(name);
    }

    // 文件不支持添加和删除操作
    add(component) {
        console.log("文件不支持添加操作");
    }

    remove(component) {
        console.log("文件不支持删除操作");
    }

    // 显示文件信息
    display() {
        console.log(`文件: ${this.name}`);
    }
}

/** 文件夹（容器节点）*/
class Folder extends FileSystemComponent {
    constructor(name) {
        super(name);
        this.children = []; // 存储子组件
    }

    // 添加组件
    add(component) {
        this.children.push(component);
    }

    // 删除组件
    remove(component) {
        this.children = this.children.filter(child => child !== component);
    }

    // 显示文件夹及其子组件信息
    display() {
        console.log(`文件夹: ${this.name}`);
        this.children.forEach(child => child.display());
    }
}

module.exports = { File, Folder };