import React, { useState } from 'react'
import AddCategory from './AddCategory'
import CategoriesLister from './CategoriesLister'
import { categories as allCategories }  from './data/categories'

function CategoriesComponent() {
const [categories, setCategories] = useState(allCategories)


const addCategory = (newCategory) =>{
    setCategories([...categories,newCategory])
}

const deleteCategory = (id) => {
    let filteredCategories = categories.filter(q => q.id !== id);
    setCategories([...filteredCategories]);
}
  return (
    <>
    <AddCategory addCategory={addCategory} />
        <CategoriesLister categoryList={categories} deleteCategory={deleteCategory}  />
    </>
  )
}

export default CategoriesComponent