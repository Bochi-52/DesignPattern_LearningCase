/**
 * 外观模式 为各种设别 提供一个统一的接口
 */


/** 投影仪 */
class Projector {
    on() {
        console.log("打开投影仪");
    }
  
    off() {
        console.log("关闭投影仪");
    }
  
    setInput(input) {
        console.log(`投影仪输入设置为: ${input}`);
    }
}
  
/** 音响 */
class SoundSystem {
    on() {
        console.log("打开音响");
    }

    off() {
        console.log("关闭音响");
    }

    setVolume(volume) {
        console.log(`音响音量设置为: ${volume}`);
    }
}

/** 灯光 */
class Lights {
    dim(level) {
        console.log(`灯光调暗到: ${level}%`);
    }

    on() {
        console.log("打开灯光");
    }

    off() {
        console.log("关闭灯光");
    }
}

/** DVD 播放器 */
class DvdPlayer {
    on() {
        console.log("打开DVD播放器");
    }

    off() {
        console.log("关闭DVD播放器");
    }

    play(movie) {
        console.log(`播放电影: ${movie}`);
    }
}

/** 家庭影院外观 */
class HomeTheaterFacade {
    constructor(projector, soundSystem, lights, dvdPlayer) {
        this._projector = projector;
        this._soundSystem = soundSystem;
        this._lights = lights;
        this._dvdPlayer = dvdPlayer;
    }

    // 看电影的简化接口
    watchMovie(movie) {
        console.log("准备看电影...");
        this._lights.dim(10); // 调暗灯光
        this._projector.on(); // 打开投影仪
        this._projector.setInput("DVD"); // 设置投影仪输入
        this._soundSystem.on(); // 打开音响
        this._soundSystem.setVolume(50); // 设置音量
        this._dvdPlayer.on(); // 打开DVD播放器
        this._dvdPlayer.play(movie); // 播放电影
    }

    // 结束看电影的简化接口
    endMovie() {
        console.log("\n结束看电影...");
        this._dvdPlayer.off(); // 关闭DVD播放器
        this._soundSystem.off(); // 关闭音响
        this._projector.off(); // 关闭投影仪
        this._lights.on(); // 打开灯光
    }
}

module.exports = { Projector, SoundSystem, Lights, DvdPlayer, HomeTheaterFacade };