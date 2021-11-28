import React, { useEffect, useState, Fragment } from "react";
import Product from "../Images/products.jpg";
import "../../App.css";
import Card from "./Card";
// import { ProductDetails } from "./ProductDetails";
// import Fetch from "../../Fetch";
import Tabletop from "tabletop";

function Products() {

  // window.addEventListener('DOMContentLoaded', function () {


  // function init() {
  //   Tabletop.init({
  //     key: publicSpreadsheetUrl,
  //     // callback: showInfo,
  //     simpleSheet: true
  //   })
  // }
  const [dataKey, setDataKey] = useState([]);
  useEffect(() => {

    // var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1uAfk5vURH2Nnb8EERFd4THUDPLpia2KXNCOpdwOd4Ek/edit?usp=sharing';

    // https://docs.google.com/spreadsheets/d/e/2PACX-1vR_-f9AmwdD0yRb_q5S05cXU0kuNV6sS1MxCFkw_Gh_2ni4M27AcXK7cWf8vA7rvMxgomqw_xc8y3Nl/pubhtml

    Tabletop.init({
      key: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR_-f9AmwdD0yRb_q5S05cXU0kuNV6sS1MxCFkw_Gh_2ni4M27AcXK7cWf8vA7rvMxgomqw_xc8y3Nl/pubhtml",
      callback: showinfo,
      simpleSheet: true

    })

    function showinfo(data, Tabletop){
      console.log(data);
    }
      // .then((data) => {
      //   console.log(data)
      //   setDataKey(data)
      // })
      // .catch((err) => console.log(err));
  }, []);



  // function showInfo(data, tabletop) {
  //   alert('Successfully processed!')
  //   console.log(data);
  // }

  //   window.addEventListener('DOMContentLoaded', init)
  // }, false)

  // const [dataKey, setDataKey] = useState([]);
  // useEffect(() => {
  //   try {
  //     Tabletop.init({
  //       key: "https://docs.google.com/spreadsheets/d/1uAfk5vURH2Nnb8EERFd4THUDPLpia2KXNCOpdwOd4Ek/edit#gid=0",
  //       // key: '1uAfk5vURH2Nnb8EERFd4THUDPLpia2KXNCOpdwOd4Ek',
  //       simpleSheet: true
  //     })
  //     console.log(data)
  //     // setData(data);
  //   }
  //   catch (err) {console.log(err);}
  // }, []);

  // useEffect(() => {
  //   Tabletop.init({
  //     key: "1uAfk5vURH2Nnb8EERFd4THUDPLpia2KXNCOpdwOd4Ek",
  //     simpleSheet: true
  //   })
  //     .then((data) => {

  //       setDataKey(data)
  //       console.log(data)
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     Tabletop.init({
  //       key: "1uAfk5vURH2Nnb8EERFd4THUDPLpia2KXNCOpdwOd4Ek",
  //       callback: data => {setData(data)},
  //       simpleSheet: true

  //     })
  //       .then((data) => setData(data))
  //       .catch((err) => console.warn(err));
  //   }, []);

  const productCard = dataKey.map((item, i) => {
    return (
      <Fragment >
        <Card
          key={i}
          img={item.img}
          name={item.product}
          mg={item.mg}
          ingredients={item.ingredients}
          price={item.price} />
          {console.log(item.product)}
      </Fragment>
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
          {/* {productCard} */}
          {/* <ul>
            {dataKey.map((item, i) => (
              <Fragment key={i}>
                <li>Product -- {item.product}</li>
                <li>Price - {item.price}</li>
                <li>Mg - {item.mg}</li>
                <br />
              </Fragment>
            ))}
          </ul> */}
        </div>
      </div>
      {/* <Fetch /> */}
    </div>
  );
}

export default Products;
