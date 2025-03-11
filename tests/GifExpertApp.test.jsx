import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests on GifExpertApp', () => {
  test("should render correctly", () => {
    render(<GifExpertApp />);

    expect(screen.getByText("Gift Expert App")).toBeTruthy();
  });

  test("should add a new category when onAddCategory is called", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "Cats" } });
    fireEvent.submit(form);

    expect(screen.getByText("Cats")).toBeTruthy();
  });

  test("should not add duplicate categories", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "Cats" } });
    fireEvent.submit(form);

    fireEvent.change(input, { target: { value: "Cats" } });
    fireEvent.submit(form);

    const categories = screen.getAllByText("Cats");

    expect(categories.length).toBe(1);
  });

  test("should render the correct number of GifGrid components", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "Cats" } });
    fireEvent.submit(form);

    fireEvent.change(input, { target: { value: "Dogs" } });
    fireEvent.submit(form);

    expect(screen.getByText("Cats")).toBeTruthy();
    expect(screen.getByText("Dogs")).toBeTruthy();

    const gifGridHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(gifGridHeadings.length).toBe(2);
  });
});