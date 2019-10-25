import { Service } from "./types";

export class HybridAnalysis implements Service {
  public baseURL: string;
  public faviconURL: string;
  public name: string;
  public checkable: boolean;

  public constructor() {
    this.baseURL = "https://www.hybrid-analysis.com";
    this.faviconURL =
      "https://www.google.com/s2/favicons?domain=hybrid-analysis.com";
    this.name = "HybridAnalysis";
    this.checkable = false;
  }

  public link(hash: string): string {
    return this.baseURL + `/sample/${hash}/`;
  }
}
