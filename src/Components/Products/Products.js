import React from 'react'
import Product from '../Images/products.jpg'
function Products() {
    return (
        <div>
            <section>
            <div className="flex justify-center items-center">
                <h1 className="flex absolute tracking-widest text-white text-center font-bold text-base p-19 sm:font-bold sm:text-2xl md:font-bold md:text-3xl lg:font-extrabold lg:text-4xl xl:font-extrabold xl:text-5xl">We are proud of our reputation <br />for delivering the highest quality work</h1>
                <img className="w-full h-auto " src={Product} />
            </div>
            </section>
            <section>
            <div className="text-center mb-16">
                    <h1 className="text-2xl m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">Prescription Medicine</h1>
                </div>
            </section>
        </div>
    )
}

export default Products
