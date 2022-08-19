import { describe, expect, it } from "vitest";
import Button from "./";
import { render, screen, userEvent } from "../test/test-utils";

describe("Button", () => {
  it("Button in the document with children text", () => {
    const { getByText, queryByText } = render(<Button>Hello</Button>);
    const el = queryByText(/Hello/i);
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Hello");
    // const text = getByText(/Hello/i);
    // expect(text).toBeDefined();
  });
});
