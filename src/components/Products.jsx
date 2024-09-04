import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Tab from './Tab';
import { getAllProducts } from '../services/api/products';


const Products = () => {
    // const products = [
    //     {
    //         categoryId: "1",
    //         image: "/assets/products/airpods-max.png",
    //         id: "1",
    //         name: "AirPods Max",
    //         price: "549.00",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    //     },
    //     {
    //         categoryId: "3",
    //         image: "/assets/products/echo-dot.png",
    //         id: "2",
    //         name: "Echo Dot",
    //         price: "99.00",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    //     },
    //     {
    //         categoryId: "2",
    //         image: "/assets/products/pixel-buds.png",
    //         id: "3",
    //         name: "Galaxy Pixel Buds",
    //         price: "99.00",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    //     },
    //     {
    //         categoryId: "1",
    //         image: "/assets/products/quietcomfort.png",
    //         id: "4",
    //         name: "Bose QuiteComfort",
    //         price: "249.00",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    //     },
    //     {
    //         categoryId: "3",
    //         image: "/assets/products/soundlink.png",
    //         id: "5",
    //         name: "Bose SoundLink",
    //         price: "119.00",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    //     },
    //     {
    //         categoryId: "5",
    //         image: "/assets/products/apple-watch.png",
    //         id: "6",
    //         name: "Apple Watch 9",
    //         price: "699.00",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    //     },
    //     {
    //         categoryId: "4",
    //         image: "/assets/products/iphone-15.png",
    //         id: "7",
    //         name: "Apple Iphone 15",
    //         price: "1299.00",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    //     },
    //     {
    //         categoryId: "4",
    //         image: "/assets/products/pixel-8.png",
    //         id: "8",
    //         name: "Galaxy Pixel 8",
    //         price: "549.00",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    //     },
    // ];

    const categories = [
        { id: "ALL", name: "All" },
        { id: "1", name: "Headphones" },
        { id: "2", name: "Earbuds" },
        { id: "3", name: "Speakers" },
        { id: "4", name: "Mobile Phones" },
        { id: "5", name: "Smart Watches" },
    ];

    const [products,setProducts] = useState([])

    useEffect(()=>{
      getAllProducts()
      .then((data)=>{
        setProducts(data)
      })
      .catch((e)=>{
        console.log(e);
        
      })
    },[])

    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const filteredProducts = selectedCategory === "ALL" ? products : products.filter((el) => el.categoryId === selectedCategory)

    function handleTabClick(id) {
        setSelectedCategory(id)
    }

    return (
        <section className='px-32 py-8'>
            <h1 className='text-4xl font-semibold'>Our Top Products</h1>
            <div className='border mt-4'></div>

            <div className='py-8'>
                <div className='flex items-center gap-x-5'>
                    {
                        categories.map((el) => (
                            <Tab key={el.id} selectedCategory={selectedCategory} category={el} handleTabClick={handleTabClick} />
                        ))
                       
                    }
                </div>
                <div className='py-8 grid grid-cols-4 gap-6 mt-4'>
                    {filteredProducts.map((el) => {
                        return (
                            <ProductCard
                                key={el.id}
                                image={el.image}
                                name={el.name}
                                price={el.price}
                                description={el.description}
                            />
                        );
                    })}
                </div>
            </div>


        </section>
    )
}

export default Products