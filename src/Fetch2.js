import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1uAfk5vURH2Nnb8EERFd4THUDPLpia2KXNCOpdwOd4Ek",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <h1>data from google sheets</h1>
    <ul>
      {data.map((item, i) => (
        <Fragment key={i}>
          <li>Product -- {item.product}</li>
          <li>Price - {item.price}</li>
          <li>Mg - {item.mg}</li>
          <br />
        </Fragment>
      ))}
    </ul>
    </>
  );
}