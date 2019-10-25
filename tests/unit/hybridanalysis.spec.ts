import { HybridAnalysis } from "@/lib/hybridanalysis";

describe("HybridAnalysis", () => {
  const subject = new HybridAnalysis();

  it("returns a link", () => {
    const hash = "foo";
    const link = subject.link(hash);

    expect(link).toEqual("https://www.hybrid-analysis.com/sample/foo/");
  });
});
