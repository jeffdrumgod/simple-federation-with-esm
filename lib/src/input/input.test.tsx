import { describe, expect, it } from "vitest";
import Input from ".";
import { render } from "../test/test-utils";

describe("Input test", () => {
  it("Input in the document", () => {
    const { container } = render(<Input />);
    const el = container.querySelector("input");
    expect(el).toBeInTheDocument();
  });
});
