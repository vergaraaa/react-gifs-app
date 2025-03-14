import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";;

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>Gift Expert App</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map(category => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}