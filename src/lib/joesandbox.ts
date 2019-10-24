import { Service } from "./types";

export class JoeSandbox implements Service {
  public baseURL: string;
  public faviconURL: string;
  public name: string;
  public checkable: boolean;

  public constructor() {
    this.baseURL = "https://www.joesandbox.com";
    this.faviconURL =
      "https://www.google.com/s2/favicons?domain=joesandbox.com";
    this.name = "JoeSandbox";
    this.checkable = false;
  }

  public link(hash: string): string {
    return this.baseURL + `/search?q=${hash}`;
  }
}
