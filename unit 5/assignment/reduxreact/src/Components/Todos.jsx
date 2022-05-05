import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {addTODO} from "../Redux/action";
import {TodoList} from "./TodoList";

const  Todo =()=>{
    const [text, setText] = useState("");

    const [todo, setTodo] = useState([]);

    const getTodo = async ()=>{
        let res = await fetch("http://localhost:5000/todos");
        let data  = await res.json();
        setTodo(data);
    };

    useEffect(()=>{
        getTodo();
    });

    const dispatch = useDispatch();

    const handleAddition = ()=>{
        const payload = {
            title: text,
            status: false,
        };
        fetch("http://localhost:5000/todos",{
            method: "POST",
            body: JSON.stringify(payload),
            headers:{
                "Content-Type": "application/json",
            },
        })
        .then((res)=> res.json())
        .then((res)=>{
            dispatch(addTODO(res));
        });
        getTodo();
        setText("");
    };

    return (
        <>
        <div className="mainflex">
            <input
              type="text"
              onChange = {(e)=>setText(e.target.value)} 
              value = {text}
            ></input>
            <button onClick={handleAddition}>Add TODOS</button>
        </div>
        <div>
            <TodoList todos= {todo}></TodoList>
        </div>
        </>
    );
};

export default Todo;