import { MalShare } from "@/lib/malshare";

describe("MalShare", () => {
  const subject = new MalShare();

  it("returns a link", () => {
    const hash = "foo";
    const link = subject.link(hash);

    expect(link).toEqual(
      "https://www.malshare.com/sample.php?action=detail&hash=foo"
    );
  });
});
