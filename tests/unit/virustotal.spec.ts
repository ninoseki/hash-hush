import { VirusTotal } from "@/lib/virustotal";

describe("VirusTotal", () => {
  const subject = new VirusTotal();

  it("returns a link", () => {
    const hash = "foo";
    const link = subject.link(hash);

    expect(link).toEqual("https://www.virustotal.com/gui/file/foo/details");
  });
});
