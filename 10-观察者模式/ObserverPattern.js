/**
 * 观察者模式（Observer Pattern）也叫 发布/订阅模式（Publish/Subscribe Pattern）
 * 新闻发布系统，新闻发布者（Subject）可以发布新闻，而订阅者（Observer）可以订阅新闻并接收通知。
 * 当新闻发布者发布新新闻时，所有订阅者都会收到通知。
 * 
 * 核心思想：
 * 发布-订阅机制：发布者（Subject）维护一个订阅者（Observer）列表，并在状态变化时通知所有订阅者。
 * 解耦：发布者和订阅者之间是松耦合的，发布者无需知道订阅者的具体实现。
 * 动态订阅：订阅者可以随时订阅或取消订阅。
 */

/** 导入 Subject、Observer 具体模块 */
const { NewsPublisher, Subscriber } = require("./Subject&Observer");


// 使用示例

// 创建发布者
const newsPublisher = new NewsPublisher();

// 创建订阅者
const subscriber1 = new Subscriber("张三");
const subscriber2 = new Subscriber("李四");
const subscriber3 = new Subscriber("王五");

// 订阅新闻
newsPublisher.subscribe(subscriber1);
newsPublisher.subscribe(subscriber2);
newsPublisher.subscribe(subscriber3);

// 发布新闻
newsPublisher.publishNews("JavaScript 发布了新版本！");
// 输出:
// 张三 收到新闻: JavaScript 发布了新版本！
// 李四 收到新闻: JavaScript 发布了新版本！
// 王五 收到新闻: JavaScript 发布了新版本！

// 取消订阅
newsPublisher.unsubscribe(subscriber2);

// 再次发布新闻
newsPublisher.publishNews("Node.js 18 发布了！");
// 输出:
// 张三 收到新闻: Node.js 18 发布了！
// 王五 收到新闻: Node.js 18 发布了！