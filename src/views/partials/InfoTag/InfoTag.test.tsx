/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import InfoTag from "./InfoTag";

describe("Info Tag Component (Correct)", () => {
  beforeEach(() => {
    render(
      <InfoTag
        url="https://google.com"
        icon="google"
        text="https://google.com"
      />
    );
  });
  afterEach(() => {
    cleanup();
  });
  test("Renders Info Tag Component With All Fields", () => {
    const tag = screen.getByTestId("infotag");
    expect(tag).toBeInTheDocument();
  });
  test("Renders correct href url", () => {
    const anchor = screen.getByTestId("info-text");
    expect(anchor).toHaveAttribute("href", "https://google.com");
  });
  test("Renders correct info text", () => {
    const infoText = screen.getByTestId("info-text");
    expect(infoText).toHaveTextContent("google.com");
  });
  test("Renders correct icon", () => {
    const brand = screen.getByTestId("brand-icon");
    expect(brand).toHaveClass("fa-google");
  });
});

describe("Info Tag Component (Missing Optionals)", () => {
  beforeEach(() => {
    render(<InfoTag text="google" />);
  });
  afterEach(() => {
    cleanup();
  });
  test("Renders without FontAwesomeIcon for brand", () => {
    const tag = screen.getByTestId("infotag");
    const brand = screen.queryByTestId("brand-icon");
    expect(tag).not.toContainElement(brand);
  });
  test("Renders without external link FAI", () => {
    const tag = screen.getByTestId("infotag");
    const brand = screen.queryByTestId("link-icon");
    expect(tag).not.toContainElement(brand);
  });
});
