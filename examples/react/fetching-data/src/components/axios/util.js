import axios from 'axios'

const urlBase = 'https://jsonplaceholder.typicode.com'

const instace = axios.create({
  baseURL: urlBase
})

// const get = (url) => {  
//   return instace.get(url)
// }

export default instace;