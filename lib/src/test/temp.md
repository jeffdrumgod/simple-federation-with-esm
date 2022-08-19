
```jsx
import { describe, expect, it } from "vitest";
import Button from "./";
import { render, screen, userEvent } from "../test/test-utils";

describe("Button test", () => {
  it("the title is visible", () => {
    const { getByText, queryByText } = render(<Button>Hello</Button>);
    const el = queryByText(/Hello/i);
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent("Hello");
    // const text = getByText(/Hello/i);
    // expect(text).toBeDefined();
  });

  // it("should increment count on click", async () => {
  //   render(<App />);
  //   userEvent.click(screen.getByRole("button"));
  //   expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  // });

  // it("uses flexbox in app header", async () => {
  //   render(<App />);
  //   const element = screen.getByRole("banner");
  //   expect(element.className).toEqual("App-header");
  //   expect(getComputedStyle(element).display).toEqual("flex");
  // });
});

// import "@testing-library/jest-dom";
// import { it, describe, expect, afterEach } from "vitest";
// import { render, cleanup } from "@testing-library/react";
// import Button from "./";

// afterEach(cleanup);

// describe("components/Container", () => {
//   it("Should render children sended to component", () => {
//     const { getByText, getByRole } = render(<Button>any_button</Button>);

//     expect(getByText(/any_content/i)).toBeDefined();
//     expect(getByRole("button", { name: "any_button" })).toBeDefined();
//   });
// });

```

## Testes de uso de formulários
https://stackoverflow.com/a/64500829