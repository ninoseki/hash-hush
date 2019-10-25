import { OTX } from "@/lib/otx";

describe("OTX", () => {
  const subject = new OTX();

  it("returns a link", () => {
    const hash = "foo";
    const link = subject.link(hash);

    expect(link).toEqual("https://otx.alienvault.com/indicator/file/foo/");
  });
});
