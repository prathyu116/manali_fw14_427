import { useState } from "react";

import {TodoInput}  from "./GroceryInput";

import {TodoItem} from "./GroceryList";

import {v4 as uuid} from "uuid";

export const Todo=()=>{      //todo is parent and todoinput,todoitem  is child
    const [todos, setTodos]= useState([])
    const addTodo=(data) =>{
        
    const payload= {
        title:data,
        status:false,
        id: uuid()
    }
        setTodos([...todos,payload])
    }


    const handleDelete=(id)=>{
              
        const removeItem= todos.filter((todos)=>{
            return todos.id!==id;
        })
        setTodos(removeItem)
    }

    const handleToggle=(id)=>{
        // alert(id)
        const updatedtodo=todos.map((el)=>
           el.id===id ?{...el,status:!el.status} : el  )  
    setTodos(updatedtodo)  }

    //child to parent pass the data . 
        return (
            <div>
                <TodoInput addTodo={addTodo}/>   
                {todos.map((el)=>(
                   
                    <TodoItem
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    todo={el} 
                    key={el.id} />
                    ))}
            </div>
        )
}