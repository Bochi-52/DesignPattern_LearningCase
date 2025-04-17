/**
 * 一个集合类（如数组、链表），需要提供一种统一的方式来遍历集合中的元素。
 * 使用 迭代器模式 可以将遍历逻辑封装在迭代器对象中，客户端无需关心集合的内部结构。
 * 
 * 核心思想：
 * 封装遍历逻辑：将遍历逻辑封装在迭代器对象中，客户端无需关心集合的内部结构。
 * 统一接口：提供统一的遍历接口，支持不同类型的集合。
 * 解耦：将集合和遍历逻辑解耦，易于扩展和维护。
 * 
 * 适用场景：
 * 遍历集合：当需要遍历集合中的元素时。
 * 隐藏集合结构：当需要隐藏集合的内部结构时。
 * 支持多种遍历方式：当需要支持多种遍历方式时（如正序、倒序）。
 * 
 * 现在很多语言都提供了迭代器模式的实现，如 JS 中的 Array、Map、Set、Object 等都提供了迭代。
 */

/** 导入 集合 模块 */
const { Collection } = require('./Iterator&Collection');


// 使用示例

// 创建集合
const collection = new Collection();
collection.add("Item 1");
collection.add("Item 2");
collection.add("Item 3");

// 创建迭代器
const iterator = collection.createIterator();

// 遍历集合
while (iterator.hasNext()) {
  console.log(iterator.next());
}

// 输出:
// Item 1
// Item 2
// Item 3