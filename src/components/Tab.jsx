import React from 'react'

const Tab = ({ selectedCategory, category, handleTabClick }) => {
    if (selectedCategory === category.id) {
        return (
            <button className="border px-2 py-1 rounded-md bg-[#edeef1] " key={category.id} onClick={() => handleTabClick(category.id)}>{category.name}</button>
        )
    }

    return (
        <button className="border border-[#edeef1] px-2 py-1 rounded-md" key={category.id} onClick={() => handleTabClick(category.id)}>{category.name}</button>
    )
}

export default Tab