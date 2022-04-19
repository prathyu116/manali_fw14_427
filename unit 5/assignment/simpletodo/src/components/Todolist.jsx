import { useState } from "react";

const Todolist = ({getData}) => {
  const [text, setText] = useState("");
  
  return (
    <div className="row">
      <input className="input"
        onChange={(e) => {
          
            setText(e.target.value);
        }}
        type="text"
        placeholder="add task"
      />
      <button className="addBtn" onClick={()=>{
          getData(text);
      }}>+</button>
    </div>
  );
};

export { Todolist };