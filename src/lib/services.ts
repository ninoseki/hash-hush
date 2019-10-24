import { VirusTotal } from "./virustotal";
import { HybridAnalysis } from "./hybridanalysis";
import { JoeSandbox } from "./joesandbox";
import { Apklab } from "./apklab";
import { MalShare } from "./malshare";
import { VxCube } from "./vxcube";

export const Services = [
  new VirusTotal(),
  new HybridAnalysis(),
  new JoeSandbox(),
  new MalShare(),
  new VxCube(),
  new Apklab()
];
