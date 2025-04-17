/**
 * 一个文本编辑器，需要渲染大量的字符（如字母、数字、符号）。
 * 每个字符可能有不同的字体、大小、颜色等属性。如果为每个字符都创建一个独立的对象，会导致内存占用过高。
 * 使用 享元模式 可以将字符的 内部状态（如字符值）和 外部状态（如字体、大小、颜色）分离，从而减少内存占用。
 * 
 * 核心思想：
 * 分离内部状态和外部状态：
 *      内部状态：可以被共享的部分（如字符值）。
 *      外部状态：不能被共享的部分（如字体、大小、颜色）。
 * 共享对象：通过共享内部状态，减少内存占用。
 * 提高性能：适用于需要创建大量相似对象的场景。
 * 
 * 适用场景：
 * 大量相似对象：当需要创建大量相似对象时（如字符、图标、粒子效果）。
 * 内存优化：当内存占用是瓶颈时，可以通过共享内部状态来优化。
 * 分离状态：当对象的状态可以分离为内部状态和外部状态时。
 */

/** 导入享元工厂类 */
const { CharacterFactory } = require('./CharacterFactory');

/** 文本编辑器 */
class TextEditor {
    constructor() {
        this.characters = [];                   // 存储字符及其外部状态
        this.factory = new CharacterFactory();  // 字符工厂
    }

    // 添加字符
    addCharacter(char, font, size, color) {
        const character = this.factory.getCharacter(char);      // 获取共享的字符对象
        this.characters.push({ character, font, size, color }); // 存储字符及其外部状态
    }

    // 渲染文本
    render() {
        this.characters.forEach(({ character, font, size, color }) => {
            character.render(font, size, color); // 渲染字符
        });
    }
}


// 使用示例

// 创建文本编辑器
const textEditor = new TextEditor();

// 添加字符
textEditor.addCharacter("A", "Arial", 12, "red");
textEditor.addCharacter("B", "Times New Roman", 14, "blue");
textEditor.addCharacter("A", "Arial", 12, "green"); // 重复使用字符 "A"
textEditor.addCharacter("C", "Verdana", 16, "black");

// 渲染文本
textEditor.render();

// 输出:
// 渲染字符: A, 字体: Arial, 大小: 12, 颜色: red
// 渲染字符: B, 字体: Times New Roman, 大小: 14, 颜色: blue
// 渲染字符: A, 字体: Arial, 大小: 12, 颜色: green
// 渲染字符: C, 字体: Verdana, 大小: 16, 颜色: black
