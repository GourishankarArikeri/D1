import "../style.css"
import {Link} from "react-router-dom"
export function Navbar (){
    return(
        <div className="navbar">
            <Link className="navbar-brand" href="/">Brand name</Link>

            <div className="nav">
                <Link className="nav-link" to="/home">HOME</Link>
                <Link className="nav-link" to="/about">ABOUT</Link>
                <Link className="nav-link" to="/contact">CONTACT</Link>
                {/* <a className="nav-link" href="#">home</a> */}
            </div>
        </div>
    )
}