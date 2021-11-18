import React from 'react'
import Product from '../Images/products.jpg'
import Card from './Card'

function Products() {
    return (
        <div>
            <div className="flex justify-center items-center">
                <h1 className="flex absolute tracking-widest text-white text-center font-bold text-base p-19 sm:font-bold sm:text-2xl md:font-bold md:text-3xl lg:font-extrabold lg:text-4xl xl:font-extrabold xl:text-5xl">We are proud of our reputation <br />for delivering the highest quality work</h1>
                <img className="w-full h-auto " src={Product} />
            </div>
            <div className="text-center mb-16">
                <h1 className="text-2xl m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">Prescription Medicine</h1>
            </div>
            <div className="m-10 p-0">  
                <div className="flex flex-wrap justify-around">
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                    <Card img="https://res.cloudinary.com/onetab/image/upload/v1606988388/1tab/products1tab/mrmfferbrvv4wcktwksp" name="medicine name" mg="30" ingredients="ingredients" price="price" />
                </div>
            </div>
        </div>
    )
}



export default Products
