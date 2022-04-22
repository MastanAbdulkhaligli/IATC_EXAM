import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { useRef } from "react";

import "./home.css";

const Home = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");

  const onClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
    setInput(inputRef.current.value);
  };

  const [items, setItems] = useState([
    {
      id: 1,
      image: "",
      symbol: "",
      current_price: "",
      total_volume: "",
      market_cap_change_percentage_24h: "",
      market_cap: "",
    },
  ]);

  useEffect(() => {
    const getSingleProduct = async () => {
      const response = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const temp = response.data;
      console.log(temp);
      setItems(temp);
    };
    getSingleProduct();
    console.log(items);
  }, []);

  return (
    <div className="homeContainer">
      <div className="search">
        <h1>Search a Currency</h1>
        <input className="search" type="text" name="" id="" />
      </div>
      {items.map((item, index) => {
        const {
          name,
          image,
          symbol,
          current_price,
          total_volume,
          market_cap_change_percentage_24h,
          market_cap,
        } = item;

        return (
          <div key={index} className="items">
            <div className="item">
              <img src={image} alt="" />
              <h4> {name}</h4>
              <h4>
                {symbol} {current_price}
              </h4>
              <h4>{total_volume}</h4>
              <h4>{market_cap_change_percentage_24h}</h4>
              <h4>{market_cap}</h4>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
