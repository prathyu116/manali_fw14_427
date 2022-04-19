import React from "react";
import { TodoList } from "./todoList";
import { useState } from "react";
import swal from "sweetalert";

const CreateTodo = () => {

    const [todo, setTodo] = useState({title: "", done: false})
    const [todoArr, setTodoArr] = useState([])

    let todos = localStorage.hasOwnProperty("todos")? JSON.parse(localStorage.getItem("todos")): []

    const onchange = (e) => {
        let {value} = e.target;
        let obj = {};
        obj["title"] = value;
        obj["done"] = false;
        setTodo(obj);
    }
    
   
    const createTodo = (e) => {
        const {name} = e.target;

        if(e.key === "Enter" || name === "addTodo"){
            if(todo.title !== ""){
                
                todos.unshift(todo);
                localStorage.setItem("todos", JSON.stringify(todos));
                setTodo({ title: "", done: false})
            }
            else {
                swal("Oops!, Please write a todo first", "error")
            }
        }
    }

    const completeTodo = (i) => {
        if(todos[i]["done"] !== true) {
            todos[i]["done"] = true;
            localStorage.setItem("todos", JSON.stringify(todos));
            setTodoArr(todos)
            swal("Good job!", "Todo Completed", "success");
        }
    }


    const deleteTodo = (i) => {
        swal({

            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover it",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(res=> {
            if(res) {
                todos.splice(i, 1)
                localStorage.setItem("todos", JSON.stringify(todos));
                setTodoArr(todos)
            }
        })
    }

    return (
       <div className="box">
           <div className="text-end">
               <h2>React Todo App</h2>
               <h4>Add a New Todo</h4>
           </div>

           <div className="text-addTodo">
               <input type="text" name="todo" value={todo.title} onKeyPress={createTodo} onChange={onchange} placeholder="Add a new Todo"/>
               <button className="btn" name="addTodo" onClick={createTodo}>Add</button>
           </div>
           <TodoList todoArr={todoArr} completeTodo={completeTodo} deleteTodo={deleteTodo} />
       </div>
    )
}

export default CreateTodo;