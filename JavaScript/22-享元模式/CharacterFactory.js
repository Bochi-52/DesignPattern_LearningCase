/** 字符类（享元类） */
class Character {
    constructor(char) {
        this.char = char; // 内部状态：字符值
    }
  
    // 渲染字符
    render(font, size, color) {
        console.log(`渲染字符: ${this.char}, 字体: ${font}, 大小: ${size}, 颜色: ${color}`);
    }
}

/** 字符工厂类（享元工厂类） */
class CharacterFactory {
    constructor() {
        this.characters = {}; // 存储共享的字符对象
    }

    // 获取字符对象
    getCharacter(char) {
        if (!this.characters[char]) {
            this.characters[char] = new Character(char); // 如果字符不存在，则创建并存储
        }
        return this.characters[char];
    }
}

module.exports = { CharacterFactory };
