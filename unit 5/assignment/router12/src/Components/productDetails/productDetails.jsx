import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productDetails.css"

export const ProductDetails = () => {

    const { id } = useParams();

    const [item, setitem] = useState({});

    useEffect(() => {
        getProduct(id);

    }, []);


    const getProduct = async (id) => {
        try {

            let res = await fetch(`https://fakestoreapi.com/products/${id}`);
            let data = await res.json();
            setitem(data);
            console.log("new", data);
        }
        catch (err) {
            console.log('err', err)

        }
        // axios.get(`https://fakestoreapi.com/products/${id}`)
        // .then((res) => {
        //   setitem(res.data);
        //   console.log(res.data);

        // })
        // .catch((err) => {
        //   console.log(err);
        // });
    }


    return (
        <div className="container">

            <div>

                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <p>Category: {item.category}</p>
                <h4>Price: {item.price}</h4>
                <button>Add to Cart</button>
            </div>

        </div>
    )
}