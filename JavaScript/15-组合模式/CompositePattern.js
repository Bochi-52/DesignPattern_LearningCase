/**
 * 一个文件系统，包含文件和文件夹。文件夹可以包含文件或其他文件夹，形成一个树形结构。
 * 使用 组合模式 可以将文件和文件夹统一视为组件，并提供一致的操作接口。
 * 
 * 核心思想：
 * 统一接口：将叶子节点（文件）和容器节点（文件夹）统一视为组件，提供一致的操作接口。
 * 递归结构：容器节点可以包含其他容器节点或叶子节点，形成树形结构。
 * 透明性：  客户端无需区分叶子节点和容器节点，可以一致地处理。
 * 
 * 适用场景：
 * 树形结构：当需要处理树形结构的数据时（如文件系统、菜单系统）。
 * 统一操作：当需要对叶子节点和容器节点提供一致的操作接口时。
 * 递归处理：当需要递归处理容器节点及其子节点时。
 */

/** 导入文件、文件夹类 */
const { File, Folder } = require('./FileSystem');


// 使用示例

// 创建文件
const file1 = new File("file1.txt");
const file2 = new File("file2.txt");
const file3 = new File("file3.txt");

// 创建文件夹
const folder1 = new Folder("文件夹1");
const folder2 = new Folder("文件夹2");

// 将文件添加到文件夹
folder1.add(file1);
folder1.add(file2);

folder2.add(file3);

// 将文件夹添加到另一个文件夹
const rootFolder = new Folder("根文件夹");
rootFolder.add(folder1);
rootFolder.add(folder2);

// 显示文件系统结构
rootFolder.display();

// 输出:
// 文件夹: 根文件夹
// 文件夹: 文件夹1
// 文件: file1.txt
// 文件: file2.txt
// 文件夹: 文件夹2
// 文件: file3.txt