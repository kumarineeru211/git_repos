import { React, useState } from "react";
import Todo from './Todo'
import Usref from './Usref'



const Doc = () => {
  const [inputList, setInputList] = useState(" ");
  const [items, setItems] = useState([]);

  const itemList = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList(" ");
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>To do list</h1>
        <br />
        <input
          type="text"
          placeholder="Add a items"
          value={inputList}
          onChange={itemList}
          
        />
        <button onClick={listOfItems}>+</button>
        <ol>
        {items.map((itemval) => {
          return <li> {itemval}</li>;
        })}
        </ol>
        <Todo/>
        {/* <Usref/> */}
      </div>
    </div>
    
  );
};
export default Doc;
