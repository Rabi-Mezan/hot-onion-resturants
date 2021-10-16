import { useContext } from "react"
import { AuthConext } from "../contexts/AuthProvider"


const UseAuth = () => {
    return useContext(AuthConext);
}

export default UseAuth;