import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Tests on AddCategory', () => {
  test('should change value of input', () => {
    render(<AddCategory onAddCategory={() => { }} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: "One Punch Man" } });

    expect(input.value).toBe("One Punch Man");
  });

  test('should call onAddCategory if input has value', () => {
    const value = "One Punch Man";

    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: value } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(value);
  });

  test('should not call onAddCategory if input is empty', () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});