import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [chosenDish, setChosenDish] = useState("");
  const [newDish, setNewDish] = useState("");

  const removeItem = (index) => {
    const listTemp = [...list];
    listTemp.splice(index, 1);
    setList(listTemp);
  };
  const chooseDish = () => {
    setChosenDish(list[Math.floor(Math.random() * list.length)].name);
  };
  const addDish = () => {
    console.log("triggered onclick without click");
    if (newDish !== "") {
      const newDishObject = {
        name: newDish,
        key: list.length,
      };
      list.push(newDishObject);
      setNewDish("");
    }
  };
  return (
    <div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div>Enter dish: </div>
        <input
          type="text"
          name="input"
          value={newDish}
          style={{ marginTop: "10px", marginBottom: "10px" }}
          onChange={(event) => setNewDish(event.target.value)}
        />
        <button onClick={() => addDish()} style={{ marginBottom: "10px" }}>
          Enter
        </button>
        {list.map((item, index) => {
          return (
            <div
              key={item.key}
              style={{
                padding: "5px",
                backgroundColor: "#f2f2f2",
                boxShadow: "7px 7px 8px -1px rgba(0,0,0,0.34)",
                marginBottom: "5px",
                display: "flex",
              }}
            >
              {item.name}
              <div
                key={item.key}
                style={{
                  border: "2px solid red",
                  borderRadius: "5px",
                  marginLeft: "3px",
                  color: "red",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  cursor: "pointer",
                }}
                onClick={() => removeItem(index)}
              >
                X
              </div>
            </div>
          );
        })}
        <div
          onClick={() => chooseDish()}
          style={{
            backgroundColor: "red",
            color: "black",

            padding: "5px",
            display: "inline",
            textAlign: "center",
            boxShadow: "7px 7px 8px -1px rgba(0,0,0,0.34)",
            cursor: "pointer",
          }}
        >
          TELL ME WHAT TO COOK TONIGHT
        </div>
        <div
          style={{
            backgroundColor: "#7bfc03",
            color: "black",
            fontSize: "60px",
            padding: "5px",
            display: "inline",
            textAlign: "center",
            marginTop: "20px",
            boxShadow: "7px 7px 8px -1px rgba(0,0,0,0.34)",
            cursor: "pointer",
          }}
        >
          {chosenDish}
        </div>
      </div>
    </div>
  );
}

export default App;
