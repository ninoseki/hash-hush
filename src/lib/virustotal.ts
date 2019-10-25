import { Service } from "./types";

export class VirusTotal implements Service {
  public baseURL: string;
  public faviconURL: string;
  public name: string;
  public checkable: boolean;

  public constructor() {
    this.baseURL = "https://www.virustotal.com";
    this.faviconURL =
      "https://www.google.com/s2/favicons?domain=virustotal.com";
    this.name = "VirusTotal";
    this.checkable = true;
  }

  public link(hash: string): string {
    return this.baseURL + `/gui/file/${hash}/details`;
  }
}
