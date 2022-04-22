import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../Context";

const TaskSeven = () => {
  const { value, setValue } = useContext(Context);

  const { deleteId, setDeleteId } = useState(null);

  const [items, setItems] = useState([
    {
      id: "",
      image: "",
      name: "",
      price: "",
    },
  ]);

  const deleteItem = (del) => {
    let temp = items.filter((item) => item.id != del);
    setItems(temp);
    console.log(temp);
  };

  useEffect(() => {
    const getSingleProduct = async () => {
      const response = await axios(
        "https://vuejsproject-806e8-default-rtdb.firebaseio.com/AllProducts.json"
      );
      const temp = response.data;
      console.log(temp);
      setItems(temp);
    };
    getSingleProduct();
    console.log(items);
  }, [value]);

  return (
    <div>
      <h1>Task 7</h1>
      {items.map((item, index) => {
        const { id, image, name, price } = item;

        return (
          <div key={index} className="items">
            <div className="item">
              <img src={image} alt="" />
              <h4> {name}</h4>
              <h4>{price}</h4>
              <button
                onClick={() => {
                  deleteItem(id);
                }}
              >
                delete
              </button>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default TaskSeven;
