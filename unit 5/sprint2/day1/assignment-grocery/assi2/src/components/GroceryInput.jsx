
import { useState } from "react"; 

export const TodoInput =({addTodo})=>{
    const [text, setText]= useState("");

   // whatever n the input it is save in the text

      return(
        <div>

<input type="text"
       placeholder="Create a grocery list"
      onChange={(e)=>{
          setText(e.target.value)
      } }/>

          <button onClick={()=>{
              addTodo(text)
          }}>Add Items</button>


        </div>

    )
}