import { useContext } from "react"
import { ThemeContext } from "../contextapi/ThemeContext"

export const useTheme = () => {
    const context=useContext(ThemeContext)
    return context
}