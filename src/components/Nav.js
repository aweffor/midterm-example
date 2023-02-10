import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function Nav({children}){
    return (
        <div>
        <nav>
            <div className="nav-logo">
            <Link to="/"> <AiFillHome style={{fontSize : "40px"}}></AiFillHome> </Link>
            </div>
            <div className="nav-elem">
                <ul>
                    <Link to="/speakers"> <li>Speakers</li></Link>
                   
                </ul>
                 </div>
        </nav>
        {children}
        </div>
    )
    
}