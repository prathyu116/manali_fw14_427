import "./index.css"

import logo from "../files/images.png"

console.log("getting");

// let nav= document.getElementById("nav")

const img= document.createElement("img")
img.src=`${logo}`;
// h1.classList.add("redtext")

document.getElementById("img").append(img)


let save_btn =document.getElementById("btn").addEventListener("click", save) ;

function save(){
    let input_value= document.getElementById("input_value").value

    let p= document.createElement("p");
    p.textContent=input_value;

  let Todo_list=  document.getElementById("Todo_list");

  Todo_list.append(p)
}


