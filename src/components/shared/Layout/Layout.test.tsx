import {
  cleanup,
  createMatchMedia,
  render
} from "../../../shared/lib/utils/testUtils";
import { Layout } from "./Layout";

describe("Layout", () => {
  beforeEach(cleanup);
  afterEach(cleanup);
  it("Mobile screen", () => {
    createMatchMedia("540px");
    const { asFragment } = render(<Layout>Mobile content</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("Desktop screen", () => {
    createMatchMedia("1025px");
    const { asFragment } = render(<Layout>Desktop content</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
