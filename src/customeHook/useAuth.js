import { useContext } from "react";
import { AuthContext } from "../contextapi/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
};

