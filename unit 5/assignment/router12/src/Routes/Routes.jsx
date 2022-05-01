import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/home/home";
import { About } from "../Components/about/about";
import { Products } from "../Components/products/products";
import {Navbar} from "../Components/navbar/navbar";
import { ProductDetails } from "../Components/productDetails/productDetails";
import { Footer } from "../Components/footer/footer";

export const AllRoutes = () => {
    return (
        <>
            <Navbar/>
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/products/:id" element={<ProductDetails/>} />

            </Routes>
            <Footer/>
        </>
    )
}