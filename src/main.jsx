import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import { ThemeProvider } from "./contextapi/ThemeContext";
import { AuthProvider } from "./contextapi/AuthContext";
createRoot (document.querySelector("#root")).render(
    <ThemeProvider>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </ThemeProvider>
)