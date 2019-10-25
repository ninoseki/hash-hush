import { shallowMount } from "@vue/test-utils";
import Link from "@/components/Link.vue";
import { VirusTotal } from "@/lib/virustotal";

describe("Link.vue", () => {
  it("renders a link", () => {
    const service = new VirusTotal();
    const hash = "foo";

    const wrapper = shallowMount(Link, {
      propsData: { service, hash }
    });

    const link = wrapper.find(".content a");
    expect(link).toBeDefined();
    if (link) {
      expect(link.attributes("href")).toEqual(
        "https://www.virustotal.com/gui/file/foo/details"
      );
    }
  });
});
