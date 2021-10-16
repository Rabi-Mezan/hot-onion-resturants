import { useContext } from "react"
import { AuthConext } from "../contexts/AuthProvider"

const useAuth = () => {
    return useContext(AuthConext)
}

export default useAuth;