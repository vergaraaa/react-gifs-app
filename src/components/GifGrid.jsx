import { GifGridItem } from "../components";
import { useGetGifs } from "../hooks/useGetGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useGetGifs(category);

  return (
    <div>
      <h3>{category}</h3>

      {
        isLoading && <h2>Loading...</h2>
      }

      <div className="card-grid">
        {
          gifs.map(gif => (
            <GifGridItem key={gif.id} {...gif} />
          ))
        }
      </div>
    </div>
  )
}