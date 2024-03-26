import { createRoot } from "react-dom/client"
import App from "./app/index"
import reportWebVitals from "./reportWebVitals"
import ProviderWrapper from "./provider/ProviderWrapper"
//styles
import { CssBaseline } from "@mui/material"
import "./index.css"
import setDefaultAxios from "services/HTTPService"

const container = document.getElementById("root")!
const root = createRoot(container)

// default configuration for axios
setDefaultAxios()

root.render(
  <ProviderWrapper>
    <CssBaseline />
    <App />
  </ProviderWrapper>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
