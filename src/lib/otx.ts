import { Service } from "./types";

export class OTX implements Service {
  public baseURL: string;
  public faviconURL: string;
  public name: string;
  public checkable: boolean;

  public constructor() {
    this.baseURL = "https://otx.alienvault.com";
    this.faviconURL =
      "https://www.google.com/s2/favicons?domain=otx.alienvault.com";
    this.name = "OTX";
    this.checkable = false;
  }

  public link(hash: string): string {
    return this.baseURL + `/indicator/file/${hash}/`;
  }
}
