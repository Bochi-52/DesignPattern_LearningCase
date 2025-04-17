/** 迭代器接口 */
class Iterator {
    hasNext() {
        throw new Error("子类必须实现 hasNext 方法");
    }

    next() {
        throw new Error("子类必须实现 next 方法");
    }
}

/** 具体迭代器类 */
class ConcreteIterator extends Iterator {
    constructor(collection) {
        super();
        this.collection = collection;
        this.index = 0; // 当前遍历位置
    }

    // 判断是否有下一个元素
    hasNext() {
        return this.index < this.collection.items.length;
    }

    // 获取下一个元素
    next() {
        if (this.hasNext()) {
            return this.collection.items[this.index++];
        }
        return null;
    }
}

/** 集合类 */
class Collection {
    constructor() {
        this.items = []; // 存储集合元素
    }

    // 添加元素
    add(item) {
        this.items.push(item);
    }

    // 创建迭代器
    createIterator() {
        return new ConcreteIterator(this);
    }
}

module.exports = { Collection };