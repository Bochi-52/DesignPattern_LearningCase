/**
 * 图片接口，和具体实现；
 */

/** 图片接口 */
class Image {
    display() {
        return new Error("子类必须实现 display 方法");
    }
}

/** 真实图片类 */
class RealImage extends Image {
    constructor(filename) {
        super();
        this._filename = filename;
        this._loadFromDisk(); // 模拟从磁盘加载图片
    }

    _loadFromDisk() {
        console.log(`加载图片: ${this._filename}`);
    }

    display() {
        console.log(`显示图片: ${this._filename}`);
    }
}

/** 代理图片类 */
class ProxyImage extends Image {
     constructor(filename) {
        super();
        this._filename = filename;
        this._realImage = null; // 初始时没有加载真实图片
    }
  
    display() {
        if (this._realImage === null) {
            this._realImage = new RealImage(this._filename); // 延迟加载真实图片
        }
        this._realImage.display(); // 调用真实图片的显示方法
    }
}

module.exports = { ProxyImage };