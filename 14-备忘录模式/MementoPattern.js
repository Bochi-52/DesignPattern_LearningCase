/**
 * 一个文本编辑器，用户可以输入文本并保存当前状态。
 * 用户可以通过撤销功能恢复到之前的状态。
 * 使用 备忘录模式 可以将文本编辑器的状态保存为备忘录对象，并在需要时恢复。
 * 
 * 适用场景：
 * 撤销功能：当需要实现撤销功能时。
 * 状态快照：当需要保存对象的状态快照时。
 * 事务回滚：当需要实现事务回滚功能时。
 */

/** 导入 文本编辑类、管理类 */
const { TextEditor, History } = require('./TextEditor');

// 使用示例

// 创建文本编辑器
const editor = new TextEditor();

// 创建历史记录管理器
const history = new History();

// 输入文本并保存状态
editor.type("Hello, ");
history.push(editor.save()); // 保存当前状态

editor.type("world!");
console.log("当前内容:", editor.getContent()); // 输出: 当前内容: Hello, world!

// 撤销到上一个状态
editor.restore(history.pop());
console.log("撤销后的内容:", editor.getContent()); // 输出: 撤销后的内容: Hello,