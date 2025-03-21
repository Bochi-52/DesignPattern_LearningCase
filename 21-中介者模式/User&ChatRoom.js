/** 聊天室（中介者接口） */
class ChatRoom {
    sendMessage(user, message) {
        throw new Error("子类必须实现 sendMessage 方法");
    }
}

/** 具体聊天室（中介者实现类） */
class ConcreteChatRoom extends ChatRoom {
    constructor() {
        super();
        this.users = []; // 存储用户
    }

    // 添加用户
    addUser(user) {
        this.users.push(user);
    }

    // 发送消息
    sendMessage(user, message) {
        this.users.forEach(u => {
            if (u !== user) {
                u.receive(message); // 向其他用户发送消息
            }
        });
    }
}

/** 用户类 */
class User {
    constructor(name, chatRoom) {
        this.name = name; // 用户名
        this.chatRoom = chatRoom; // 聊天室
    }
  
    // 发送消息
    send(message) {
        console.log(`${this.name} 发送消息: ${message}`);
        this.chatRoom.sendMessage(this, message); // 通过聊天室发送消息
    }
  
    // 接收消息
    receive(message) {
        console.log(`${this.name} 收到消息: ${message}`);
    }
}

module.exports = { User, ConcreteChatRoom };