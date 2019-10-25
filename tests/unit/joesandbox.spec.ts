import { JoeSandbox } from "@/lib/joesandbox";

describe("JoeSandbox", () => {
  const subject = new JoeSandbox();

  it("returns a link", () => {
    const hash = "foo";
    const link = subject.link(hash);

    expect(link).toEqual("https://www.joesandbox.com/search?q=foo");
  });
});
