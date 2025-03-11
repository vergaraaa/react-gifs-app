import { useEffect, useState } from "react";

import { getGifs } from "../helpers/get-gifs"

export const useGetGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const gifs = await getGifs(category);
            setGifs(gifs);
            setIsLoading(false);
        }

        getData();
    }, [category])

    return { gifs, isLoading }
}