import React from 'react'

function CategoriesLister({ categoryList ,deleteCategory}) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categoryList && categoryList.map(cat => {
                            return <tr key={cat.id}>
                                <td>{cat.id}</td>
                                <td>{cat.name}</td>
                                <td>{cat.description}</td>
                                <td onClick={()=>deleteCategory(cat.id)}>Delete</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default CategoriesLister