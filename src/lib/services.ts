import { Apklab } from "./apklab";
import { HybridAnalysis } from "./hybridanalysis";
import { JoeSandbox } from "./joesandbox";
import { MalShare } from "./malshare";
import { OTX } from "./otx";
import { VirusBay } from "./virusbay";
import { VirusTotal } from "./virustotal";
import { VxCube } from "./vxcube";

export const Services = [
  new VirusTotal(),
  new HybridAnalysis(),
  new JoeSandbox(),
  new MalShare(),
  new OTX(),
  new VirusBay(),
  new VxCube(),
  new Apklab()
];
