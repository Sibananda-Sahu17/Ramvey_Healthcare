import React, { useEffect, useState} from "react";
import Product from "../Images/products.jpg";
import "../../App.css";
import Card from "./Card";
import axios from "axios"



function Products() {

  const [dataKey, setDataKey] = useState([])
  useEffect(() => {
    axios.get("https://sheetsu.com/apis/v1.0su/0cd6ff79f1ee")
      .then((data) => {
        setDataKey(data.data)
      })
  }, [])


  const productCard = dataKey.map((item, i) => {
    return (
      <Card
        key={i}
        img={item.img}
        name={item.product}
        mg={item.mg}
        ingredients={item.ingredients}
        price={item.price} />
    )
  })






  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="flex absolute tracking-widest text-white text-center font-bold text-base p-19 sm:font-bold sm:text-2xl md:font-bold md:text-3xl lg:font-extrabold lg:text-4xl xl:font-extrabold xl:text-5xl">
          We are proud of our reputation <br />
          for delivering the highest quality work
        </h1>
        <img className="w-full top_carousel "
          src={Product}
          alt="Product" />
      </div>
      <div className="grad-color text-center mb-16">
        <h1 className="text-2xl m-1 mt-3 font-bold sm:text-3xl sm:m-3 sm:mt-5 md:text-4xl md:m-5 md:mt-7 lg:text-5xl lg:m-7 lg:mt-5">
          Prescription Medicine
        </h1>
      </div>
      <div className="m-10 p-0">
        <div className="flex flex-wrap flex-row justify-center">
          {productCard}
        </div>
      </div>
    </div>
  );
}

export default Products;











