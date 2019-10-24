import { Service } from "./types";

export class Apklab implements Service {
  public baseURL: string;
  public faviconURL: string;
  public name: string;
  public checkable: boolean;

  public constructor() {
    this.baseURL = "https://www.apklab.io";
    this.faviconURL = "https://www.google.com/s2/favicons?domain=apklab.io";
    this.name = "Apklab";
    this.checkable = false;
  }

  public link(hash: string): string {
    return this.baseURL + `apk.html?hash=${hash}`;
  }
}
