class SyncUserSetting {
  private constructor() {}
  private static instance: SyncUserSetting;
  public static getInstance() {
    if (!this.instance) {
      this.instance = new SyncUserSetting();
    }
    return this.instance;
  }
}

class AsyncUserSetting {
  private uid: string = "";
  private constructor(uid: string) {
    this.uid = uid;
  }
  private static async _readUserSetting(): Promise<string> {
    return new Promise((success, fail) => {
      setTimeout(() => {
        success("test");
      }, 1000);
    });
  }

  public static async getInstance(): Promise<AsyncUserSetting> {
    let uid = await this._readUserSetting();
    return new AsyncUserSetting(uid);
  }

  public show() {
    console.log(this.uid);
  }
}
