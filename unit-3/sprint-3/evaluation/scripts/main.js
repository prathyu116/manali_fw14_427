async function apiCall(url) {

    try{
    

    
        let responce= await fetch(url)
    
    let data=await responce.json();
    
    return data;
    
    
    }catch(error){
        console.log("error",error);
    }
    
    //add api call logic here


}


function appendArticles(articles, main) {

    //add
    articles.map((articles)=>{

        let img=document.createElement("img");
        img.src=elem.strMealThumb;
       
       let name=document.createElement("p");
       name.innerText=elem.strMeal;
       
       location.append(img,name);
       
       
       
       
       })

}

export { apiCall, appendArticles }