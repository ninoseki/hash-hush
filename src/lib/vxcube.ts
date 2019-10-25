import { Service } from "./types";

export class VxCube implements Service {
  public baseURL: string;
  public faviconURL: string;
  public name: string;
  public checkable: boolean;

  public constructor() {
    this.baseURL = "http://vxcube.com";
    this.faviconURL = "https://www.google.com/s2/favicons?domain=vxcube.com";
    this.name = "VxCube";
    this.checkable = false;
  }

  public link(hash: string): string {
    return this.baseURL + `/result/${hash}`;
  }
}
