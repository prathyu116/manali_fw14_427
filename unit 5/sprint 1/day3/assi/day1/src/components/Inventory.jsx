// import { useState } from "react";

// export const Inventory = () => {
//   const [inv, setInv] = useState({
//     books: 10,
//     notebooks: 13,
//     pens: 40,
//   });
//   const [total,SetTotal]=useState(63)
//   const handleAdd=(e)=>{
// const  {id}=e.target
// console.log(id);
// setInv({...inv,[id]:inv[id]+1});
// SetTotal(total+1);
//   }
//     // Create add and remove functions here that changes the
//     // state.
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         borderRadius: "3px",
//         padding: "10px",
//         display: "flex",
//         flexDirection: "column",
//         width: "400px",
//       }}
//     >
//       <div className="items">
//         <span>Books: </span>
//         <button className="circlularButton" onClick={handleAdd} id="books">+</button>
//         <button className="circlularButton">-</button>
//         <span>{inv.books}</span>
//       </div>
//       <div className="items">
//         <span>Notebooks: </span>
//         <button className="circlularButton">+</button>
//         <button className="circlularButton">-</button>
//         <span>{inv.notebooks}</span>
//       </div>
//       <div className="items">
//         <span>Pen: </span>
//         <button className="circlularButton">+</button>
//         <button className="circlularButton">-</button>
//         <span>{inv.pens}</span>
//       </div>
//       <div className="items">
//         <span>Ink Pens: </span>
//         <button className="circlularButton">+</button>
//         <button className="circlularButton">-</button>
//         <span>{inv.inkpens}</span>
//       </div>
//             {/*calculate total and show it*/}
//       total: {total}
//     </div>
//   );
// };
import { useState } from "react";

export const Inventory = () => {
  // const [inv, setInv] = useState({
  //   books: 10,
  //   notebooks: 13,
  //   pens: 40,
  // });
 
  const [ books, setBook ] = useState(10);
  const [ notebooks, setNotebooks ] = useState(12);
  const [ pens, setPens ] = useState(40);
  const [inkpens, setinkpens]= useState(0);
  const [total, setTotal]=useState(0)
    // Create add and remove functions here that changes the
    // state.


    const handleClick=(item, value)=>{
      setTotal(books+pens+notebooks+inkpens)
      if(item==="books") setBook(books+value);
      else if (item==="pen") setPens(pens+value);
      else if (item==="notebook") setNotebooks(notebooks+value)
      else if (item==="inkpen")  setinkpens(inkpens+value)
    };


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
        onClick={()=>{handleClick("books", 1)}}
        className="circlularButton">+</button>
        <button
          onClick={()=>{handleClick("books", -1)}}
          className="circlularButton">-</button>
        <span>{books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
         onClick={()=>{handleClick("notebook", 1)}}
          className="circlularButton">+</button>
        <button
         onClick={()=>{handleClick("notebook", -1)}}
          className="circlularButton">-</button>
        <span>{notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
         onClick={()=>{handleClick("pen", 1)}}
          className="circlularButton">+</button>
        <button
         onClick={()=>{handleClick("pen", -1)}}
          className="circlularButton">-</button>
        <span>{pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button 
         onClick={()=>{handleClick("inkpen", 1)}}
         className="circlularButton">+</button>
        <button 
         onClick={()=>{handleClick("inkpen",-1)}}
         className="circlularButton">-</button>
        <span>{inkpens}</span>
      </div>
            {/* {/calculate total and show it/} */}
      total: {total}
    </div>
  );
};