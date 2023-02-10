import axios from "axios";

export default function apiComment(method,endpoint,){ 

    return axios({
        // მსგავსი ლოგიკა jsonplaceholder apiსთვის

})
.then(response => response.data.data) // შეიძლება იყოს შესაცვლელი და მიაქციეთ ყურადღება 
}