/**
 * 委托（Delegation）:
 * 在观察者模式中，指发布者将通知订阅者的任务委托给订阅者的 update 方法；
 * 发布者（Subject）只负责维护订阅者列表和调用订阅者的 update 方法；
 * 订阅者（Observer）负责实现 update 方法，定义接收到通知后的具体行为；
 * 这种委托机制使得发布者和订阅者的职责分离，发布者不需要关心订阅者的具体实现，只需调用 update 方法即可。
 */

/** 发布者类（Subject） */
class NewsPublisher {
    constructor() {
        this._subscribers = []; // 存储订阅者
        this._latestNews = null; // 最新新闻
    }

    // 订阅方法
    subscribe(subscriber) {
        this._subscribers.push(subscriber);
    }

    // 取消订阅方法
    unsubscribe(subscriber) {
        this._subscribers = this._subscribers.filter(sub => sub !== subscriber);
    }

    // 发布新闻
    publishNews(news) {
        this._latestNews = news;
        this._notifySubscribers();
    }

    // 通知所有订阅者
    _notifySubscribers() {
        this._subscribers.forEach(subscriber => subscriber.update(this._latestNews));
    }
}

/** 订阅者类（Observer） */
class Subscriber {
    constructor(name) {
        this.name = name;
    }

    // 更新方法（接收新闻）
    update(news) {
        console.log(`${this.name} 收到新闻: ${news}`);
    }
}

module.exports = { NewsPublisher, Subscriber };