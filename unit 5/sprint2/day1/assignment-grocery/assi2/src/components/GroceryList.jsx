export const TodoItem =({todo, handleToggle, handleDelete})=>{
    return <div className="oneTodo">{todo.title}


    <button onClick={()=>handleDelete(todo.id)}>Delete</button>
    <button onClick={()=> handleToggle(todo.id)} >
        {todo.status? "Done" : "Not done"}
    </button>
    
    </div>
}