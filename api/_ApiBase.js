import axios from 'axios'

const Axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})

Axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return error
  }
)

export default Axios
