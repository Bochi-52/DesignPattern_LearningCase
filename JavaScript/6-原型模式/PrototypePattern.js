/**
 * 游戏系统，需要创建多个相似的怪物（如僵尸、骷髅、幽灵）。
 * 每个怪物都有一些共同的属性（如生命值、攻击力、技能），但每个具体的怪物可能有不同的初始值。
 * 使用 原型模式 可以通过克隆原型对象来快速创建新对象，而无需重新初始化。
 */

/** 导入怪物类 */
const { Zombie, Skeleton, Ghost } = require('./Monster');


// 使用示例

// 创建原型对象
const zombie1 = new Zombie();
const skeleton1 = new Skeleton();

// 克隆原型对象来创建新对象
zombie1.addSkill("吸血");
skeleton1.addSkill("剑术");

const zombie2 = zombie1.clone();
zombie1.health -= 10;
zombie2.addSkill("撕咬");

const skeleton2 = skeleton1.clone();
skeleton2.health -= 10;
skeleton2.addSkill("复活");


zombie1.display(); 
zombie2.display(); 
skeleton1.display(); 
skeleton2.display(); 