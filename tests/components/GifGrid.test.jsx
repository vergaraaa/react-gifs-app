import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useGetGifs } from "../../src/hooks/useGetGifs";

jest.mock("../../src/hooks/useGetGifs");

describe('Tests on GifGrid.jsx', () => {
  const category = "One Piece";

  test('should show loading', () => {
    useGetGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Loading...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('should show items when gifs are loaded', () => {
    const gifs = [
      {
        id: "123abc",
        title: "One Punch",
        url: "https://localhost/one-punch.jpg"
      },
      {
        id: "abc123",
        title: "One Punch Man",
        url: "https://localhost/one-punch-man.jpg"
      },
    ]
    useGetGifs.mockReturnValue({
      gifs: gifs,
      isLoading: false,
    });

    const { container } = render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(gifs.length);
    expect(container.getElementsByClassName("card").length).toBe(gifs.length);
  });
});