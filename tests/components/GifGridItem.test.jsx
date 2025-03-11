import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Tests on GifGridItems.jsx', () => {
  const title = "Gif Grid Item";
  const url = "https://place-hold.it/300x500";

  test('should match snapshot', () => {
    const { container } = render(<GifGridItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('should show image with correct url', () => {
    render(<GifGridItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show title in component', () => {
    render(<GifGridItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  })
});