import axios from "axios"

const setDefaultAxios = () => {
  axios.defaults.baseURL = "http://localhost:3001"
  axios.defaults.headers.common["Content-Type"] = "application/json"
}

export default setDefaultAxios
