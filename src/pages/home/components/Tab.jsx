import React from 'react'

const Tab = ({ selectedCategory, category, handleTabClick }) => {
    if (selectedCategory === category._id) {
        return (
            <button className="border px-2 py-1 rounded-md bg-[#edeef1] " key={category._id} onClick={() => handleTabClick(category._id)}>{category.name}</button>
        )
    }

    return (
        <button className="border border-[#edeef1] px-2 py-1 rounded-md" key={category._id} onClick={() => handleTabClick(category._id)}>{category.name}</button>
        
    )
}

export default Tab