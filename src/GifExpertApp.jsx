import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['goku'])

  const onAddCategory = (newcategory) => {

    if (categories.includes(newcategory)) return;

    // setCategories((a) => [newcategory, ...a])
    setCategories([newcategory, ...categories])
  }


  return (
    <>
      <div>GifExpertApp</div>

      <AddCategory
        // setCategories={setCategories} 
        // onNewCategory={ event => onAddCategory(event) }
        onNewCategory={onAddCategory}
      />

      {
        categories.map((category, i) => (
          <GifGrid key={category} category={category} />
        )
        )
      }
    </>
  )
}
