/**
 * 怪物接口，和具体实现
 */

/** 克隆接口 */
class Cloneable {
    clone() {
        throw new Error("Not implemented");
    }
}

/** 怪物基类 */
class Monster extends Cloneable {
    constructor(name, health, attack) {
        super();
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.skills = []; // 引用类型的属性
    }

    clone() {

        // 浅复制
        // return Object.assign(Object.create(Object.getPrototypeOf(this)), this); 

        /**
         * 浅复制会导致克隆对象和原型对象共享同一个 skills 数组。修改一个对象的 skills 会影响另一个对象。
         * 为了解决浅复制的问题，我们需要实现深复制。
         */

        // 1.手动实现深复制
        const cloned = new Monster(this.name, this.health, this.attack);
        cloned.skills = [...this.skills]; // 深复制 skills 数组
        return cloned;

        // 2.使用 JSON.parse(JSON.stringify(this))，无法复制函数、undefined、Symbol 等特殊类型的属性。
        return JSON.parse(JSON.stringify(this)); // 深复制

        // 3.使用第三方库(如 Lodash 的 cloneDeep 方法)

        /**
         * 深复制 的问题
         * 性能问题：深复制会递归复制所有嵌套属性，可能会影响性能，尤其是对象层级很深时。
         * 循环引用：如果对象中存在循环引用(如 A 引用 B，B 又引用 A)，JSON.parse 和 JSON.stringify 会报错，而手动实现深复制需要处理循环引用。
         */
    }

    addSkill(skill) {
        this.skills.push(skill);
    }

    display() {
        console.log(`${this.name} - 生命值: ${this.health}, 攻击力: ${this.attack}, 技能: ${this.skills.join(", ")}`);
    }
}

/** 僵尸类 */
class Zombie extends Monster {
    constructor() {
        super("僵尸", 100, 10); // 初始化僵尸的属性
    }
}
  
  /** 骷髅类 */
class Skeleton extends Monster {
    constructor() {
        super("骷髅", 80, 15);  // 初始化骷髅的属性

        this.isAwake = false; // 骷髅是否睁眼
    }

    /**
     * 一般子类会添加 一些新属性，可以在子类重写clone方法时
     */
    clone() {
        const cloned = new Skeleton(this.name, this.health, this.attack);
        cloned.skills = [...this.skills]; // 深复制 skills 数组
        return cloned;
    }

    display() {
        super.display(); // 调用父类的 display 方法
        console.log(`睁眼状态: ${this.isAwake}`);
    }
}

/** 幽灵类 */  
class Ghost extends Monster {
    constructor() {
        super("幽灵", 120, 8);  // 初始化幽灵的属性
    }
}

module.exports = { Zombie, Skeleton, Ghost };