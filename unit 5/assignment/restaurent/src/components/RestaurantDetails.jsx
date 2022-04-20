import { useEffect, useState } from "react";


const GetData = ({ toggleDisplay }) => {

    const [data, setData] = useState([]);

    const getRes = async () => {
        let res = await fetch("http://localhost:8000/addRestaurant");
        let data = await res.json();
        setData(data);
    }


    useEffect(() => {
        getRes();
    }, [])


    const pricehandler = (e) => {

        let {value} = e.target;

        if(value === "lowToHigh"){
            let newData = [...data];

            newData.sort((a, b) => {
                a.price = +a.price;
                b.price = +b.price;
                if(a.price < b.price){
                    return -1;
                }
                return 1;
            })
            setData(newData);
        }
        else if(value === "highToLow"){
            let newData = [...data];

            newData.sort((a, b) => {
                a.price = +a.price;
                b.price = +b.price;
                if(a.price > b.price){
                    return -1;
                }
                return 1;
            })
            setData(newData);
        }

        
    }


    const ratingHandler = (e) => {
        let {value} = e.target;

        if(value === "lowToHigh"){
            let newData = [...data];

            newData.sort((a, b) => {
                a.votes = +a.votes;
                b.votes = +b.votes;
                if(a.votes < b.votes){
                    return -1;
                }
                return 1;
            })
            setData(newData);
        }
        else if(value === "highToLow"){
            let newData = [...data];

            newData.sort((a, b) => {
                a.votes = +a.votes;
                b.votes = +b.votes;
                if(a.votes > b.votes){
                    return -1;
                }
                return 1;
            })
            setData(newData);
        }
    }

    // const priceHighToLow = ()=> {

    // }

    return (
        <div className="mainCon">
            <div className="sortDiv">

                <h2>Filter</h2>
                <select name="selectByPrice" id="selectPrice"  onChange={pricehandler}>
                    <option value="" >Filter By Price</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>

                <select name="selectByRating" id="selectRating" onChange={ratingHandler}>
                    <option value="">Filter By Rating</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>

            </div>
            <div className="container">
                {data.map((res, index) => {
                    return (
                        <div key={res.id} className="mainDiv">
                            <img src={res.img} alt="" />

                            <h2>{res.name}</h2>
                            <p>Price: {res.price} Rs</p>
                            <p>Address: {res.address}</p>
                            <p>Votes: {res.votes}</p>

                        </div>
                    )
                })}

            </div>
        </div>

    )
}




export { GetData }