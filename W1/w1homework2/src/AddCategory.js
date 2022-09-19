import React, { useState } from 'react'

function AddCategory({addCategory}) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    const addCategories = () => {

        let randomId = Math.floor(Math.random() * 1000);
        let newSupplier = {
            id: randomId,
            name: name,
            description: description,
        }

        addCategory(newSupplier);

    }

  return (
    <>
        <div>
                <label>Category Name:</label>
                <input type='text' onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label>Category Description:</label>
                <input type='text' onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div>
                <button onClick={() => addCategories()}>Add</button>

            </div>
    </>
  )
}

export default AddCategory