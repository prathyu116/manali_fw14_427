import {BsTwitter, BsFacebook} from "react-icons/bs"


export const Footer = () => {
    return (
        <div style={{display: "flex", height: "200px", background: "grey", marginTop: "50px"}}>
            <BsTwitter className="icon"/>
            <BsFacebook className="icon"/>
        </div>
    )
}