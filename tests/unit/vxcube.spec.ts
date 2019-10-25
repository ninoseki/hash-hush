import { VxCube } from "@/lib/vxcube";

describe("VxCube", () => {
  const subject = new VxCube();

  it("returns a link", () => {
    const hash = "foo";
    const link = subject.link(hash);

    expect(link).toEqual("http://vxcube.com/result/foo");
  });
});
