import { renderHook, waitFor } from "@testing-library/react";
import { useGetGifs } from "../../src/hooks/useGetGifs";

describe('Tests on useGetGifs', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useGetGifs("One Piece"));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return gifs array and isLoading in false', async () => {
    const { result } = renderHook(() => useGetGifs("One Piece"));

    await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0)
    );

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});