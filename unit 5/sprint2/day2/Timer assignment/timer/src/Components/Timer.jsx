import {useState,useEffect} from "react";

function Timer(){
 const[timer,setTimer]=useState(1);
  const endtime=15;
 useEffect(()=>{
    let id= setInterval(()=>{
         setTimer((prev)=>{
             if(prev===endtime){
                 clearInterval(id);
                 return 15;
             }
             return prev+1;
         })
     },1000)

     return(()=>{
         clearInterval(id)
     })
 },[])


 return (
     <div>
         <h3>Timer:{timer}</h3>
     </div>
 )
}

export {Timer}