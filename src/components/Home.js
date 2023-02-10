import { useQuery } from "react-query";
import apiRequests from "./apiRequest";
import Nav from "./Nav";

export default function Home(){
    const {data} = useQuery ("speaker", () => apiRequests ('GET', "users?page=2"))
    return(
        
        <Nav>
            <div>
                <h1>მთავარი გვერდი</h1>
                {/* map logic */}
            </div>
        </Nav>
    )
   
}