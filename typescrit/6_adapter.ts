/// 接口协议
interface Player {
  playVideo(): string;
}

/// 具体内核
class SysPlayerCore {
  public play(): string {
    return "use sys player play video";
  }
}

/// 适配器
class SysPlayerAdapter implements Player {
  private readonly adaptee: SysPlayerCore;

  constructor(adaptee: SysPlayerCore) {
    this.adaptee = adaptee;
  }

  public playVideo(): string {
    return this.adaptee.play();
  }
}

const core = new SysPlayerCore();
const player = new SysPlayerAdapter(core);

console.log(player.playVideo()); // "Adaptee request"
