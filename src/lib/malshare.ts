import { Service } from "./types";

export class MalShare implements Service {
  public baseURL: string;
  public faviconURL: string;
  public name: string;
  public checkable: boolean;

  public constructor() {
    this.baseURL = "https://www.malshare.com";
    this.faviconURL = "https://www.google.com/s2/favicons?domain=malshare.com";
    this.name = "MalShare";
    this.checkable = true;
  }

  public link(hash: string): string {
    return this.baseURL + `/sample.php?action=detail&hash=${hash}`;
  }
}
