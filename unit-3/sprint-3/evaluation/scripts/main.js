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

    //add append call

}

export { apiCall, appendArticles }