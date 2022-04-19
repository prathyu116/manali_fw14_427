import {useState} from "react"
import {Todolist} from "./Todolist"
import { TodoItem } from "./TodoItem";
import {nanoid} from "nanoid"

const ToDo = () => {

    const [todoArr, setArr] = useState([]);
    // console.log(todoArr);
    const getData = (data) => {
        const dataObj = {
            title:data,
            status:false,
            id:nanoid(6)
        }
        // console.log("received",data);
        setArr([...todoArr, dataObj]);
    }

    const handle = (id) => {
        // console.log(id)
        setArr(
            todoArr.map((elem) => (elem.id === id? {...elem, status: !elem.status}:elem))
        );

    }


  return (
    <div style={{
        border:"2px solid red"
    }}>
        <Todolist getData={getData}/>
        {todoArr.map((elem) =>{
            
            return (  
                <TodoItem handle={handle} item={elem}></TodoItem>
            )
        })}

    </div>
  );
}

export {ToDo};