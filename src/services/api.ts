import axios from 'axios'

const api = axios.create({
  baseURL: 'https://app.econverse.com.br/'
})

export default api