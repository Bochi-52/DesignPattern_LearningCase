/**
 * 一个聊天室系统，多个用户可以通过聊天室发送消息。如果用户之间直接通信，会导致复杂的依赖关系。
 * 使用 中介者模式 可以将用户之间的通信集中到聊天室（中介者）中，从而简化系统结构。
 * 
 * 核心思想：
 * 集中管理：将对象之间的交互集中到中介者中，避免对象之间的直接依赖。
 * 解耦：对象之间无需直接通信，通过中介者进行交互，降低耦合度。
 * 简化系统：通过中介者简化对象之间的交互逻辑，提高系统的可维护性。
 * 
 * 适用场景：
 * 复杂交互：当对象之间的交互复杂且相互依赖时。
 * 解耦：当需要将对象之间的依赖关系解耦时。
 * 集中管理：当需要集中管理对象之间的交互时。
 * 
 * 这里案例里的实现和观察者模式很像，下面列举一些区别：
 *              中介者模式	                    观察者模式
 * 核心思想	    集中管理对象之间的交互	         通过发布-订阅机制实现对象之间的通知
 * 交互方式	    对象通过中介者间接通信	         对象通过订阅和发布消息通信
 * 适用场景	    对象之间的交互复杂且相互依赖	 对象之间需要松耦合的通知机制
 * 实现方式	    中介者负责协调所有交互	         发布者和观察者通过消息通信
 * 
 * 中介者模式 更适合对象之间交互复杂且相互依赖的场景，通过中介者集中管理交互逻辑。
 * 观察者模式 更适合对象之间需要松耦合通知的场景，通过发布-订阅机制实现通信。
 */

/** 导入用户、聊天室类 */
const { User, ConcreteChatRoom } = require('./User&ChatRoom');


// 使用示例

// 创建聊天室
const chatRoom = new ConcreteChatRoom();

// 创建用户
const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);
const user3 = new User("Charlie", chatRoom);

// 添加用户到聊天室
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

// 用户发送消息
user1.send("大家好！");
// 输出:
// Alice 发送消息: 大家好！
// Bob 收到消息: 大家好！
// Charlie 收到消息: 大家好！

user2.send("你好，Alice！");
// 输出:
// Bob 发送消息: 你好，Alice！
// Alice 收到消息: 你好，Alice！
// Charlie 收到消息: 你好，Alice！