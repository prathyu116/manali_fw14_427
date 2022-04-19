import React from "react";

const TodoList = (props) => {

    const {completeTodo, deleteTodo} = props;
    let todoArr = props.todoArr.length > 0? props.todoArr : JSON.parse(localStorage.getItem('todos'))

    return (
        <div style={{maxHeight: "210px", overflowY: "auto", marginTop: "30px"}}>
            <ul style={{margin:0, padding: 0, lifeStyle: "none"}}>

                {todoArr && todoArr.length > 0? 
                todoArr.map((el, i) => (
                    <li key={i}>
                    <div style={{width:"85%"}} className={el["done"]? "line-through" : null}>{el.title}</div>
                    <div style={{width: "10%", padding: "5px", display: "flex", textAlign: "end", justifyContent: "space-between", marginLeft: "5px"}}>
                        <i title="Complete" onClick={()=> completeTodo(i)} className={el["done"]? "green" : "blue"}>✔</i>
                        <i title="Delete" onClick={() => deleteTodo(i)}>Del</i>

                    </div>

                </li>
                )) : null
            }
               
            </ul>
        </div>
    )
}

export {TodoList}