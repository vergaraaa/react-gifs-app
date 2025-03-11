import { getGifs } from "../../src/helpers/get-gifs"

describe('Test on get-gifs.js', () => {
    test('should return a gif array', async () => {
        const gifs = await getGifs("one piece");

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            url: expect.any(String),
            title: expect.any(String),
        })
    });
})