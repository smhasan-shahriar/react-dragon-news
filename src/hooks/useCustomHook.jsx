import { useContext } from "react"
import { AuthContext } from "../Authorization/MainAuth"

const useCustomHook = () => {
    const myRef = useContext(AuthContext);
    return myRef;
}
export default useCustomHook; 