import { Service } from "./types";

export class VirusBay implements Service {
  public baseURL: string;
  public faviconURL: string;
  public name: string;
  public checkable: boolean;

  public constructor() {
    this.baseURL = "https://beta.virusbay.io";
    this.faviconURL =
      "https://www.google.com/s2/favicons?domain=beta.virusbay.io";
    this.name = "VirusBay";
    this.checkable = false;
  }

  public link(hash: string): string {
    return this.baseURL + `/sample/browse/${hash}`;
  }
}
