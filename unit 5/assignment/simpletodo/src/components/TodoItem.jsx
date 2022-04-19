export const TodoItem = ({item, handle}) => {
    // console.log(item);
    return (
        <div className="row">
           <div className="rows">
           
               <div className="text"> {item.title}
                  </div>
               <button className={`${item.status? "toggleGreen" : "toggleBlue"}`}  onClick={() => handle(item.id)}>
                   <div className="toggleIn"></div>
                </button>
            </div>
        </div>
    )  
}
    
    //{item.status? "done" : "not done"} 