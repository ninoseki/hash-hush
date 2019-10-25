import { Apklab } from "@/lib/apklab";

describe("Apklab", () => {
  const subject = new Apklab();

  it("returns a link", () => {
    const hash = "foo";
    const link = subject.link(hash);

    expect(link).toEqual("https://www.apklab.io/apk.html?hash=foo");
  });
});
