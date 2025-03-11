import React, { useState } from "react"

export const AddCategory = ({
  onAddCategory
}) => {
  const [search, setSearch] = useState("");

  const onInputChange = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!search.trim().length) return;

    onAddCategory(search)
    setSearch("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={search}
        onChange={onInputChange}
      />
    </form>
  )
}