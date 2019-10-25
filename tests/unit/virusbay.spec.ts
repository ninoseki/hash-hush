import { VirusBay } from "@/lib/virusbay";

describe("VirusBay", () => {
  const subject = new VirusBay();

  it("returns a link", () => {
    const hash = "foo";
    const link = subject.link(hash);

    expect(link).toEqual("https://beta.virusbay.io/sample/browse/foo");
  });
});
