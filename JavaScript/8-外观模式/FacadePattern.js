/**
 * 家庭影院系统，包含多个设备（如投影仪、音响、灯光、DVD 播放器）。每次看电影时，需要依次打开这些设备并调整设置，操作非常繁琐。
 * 使用 外观模式 可以提供一个统一的接口，简化操作流程。
 */

/** 导入 家庭影院外观 */
const { Projector, SoundSystem, Lights, DvdPlayer, HomeTheaterFacade } = require('./HomeTheater');


// 使用示例

// 创建子系统对象
const projector = new Projector();
const soundSystem = new SoundSystem();
const lights = new Lights();
const dvdPlayer = new DvdPlayer();

// 创建外观对象
const homeTheater = new HomeTheaterFacade(projector, soundSystem, lights, dvdPlayer);

// 使用外观接口看电影
homeTheater.watchMovie("星际穿越");
// 输出:
// 准备看电影...
// 灯光调暗到: 10%
// 打开投影仪
// 投影仪输入设置为: DVD
// 打开音响
// 音响音量设置为: 50
// 打开DVD播放器
// 播放电影: 星际穿越

// 使用外观接口结束看电影
homeTheater.endMovie();
// 输出:
// 结束看电影...
// 关闭DVD播放器
// 关闭音响
// 关闭投影仪
// 打开灯光