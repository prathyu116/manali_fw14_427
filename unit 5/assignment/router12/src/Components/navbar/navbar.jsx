import "./navbar.css";
import {Link} from "react-router-dom";
import {BsCartCheck} from "react-icons/bs";

export const Navbar = () => {


    return (
        <nav>
            <Link to="/">
                <p>Home</p>
            </Link>

            <Link to="/about">
                <p>About</p>
            </Link>

            <Link to="/products">
                <p>Products</p>
            </Link>

            <BsCartCheck />

        </nav>
    )
}