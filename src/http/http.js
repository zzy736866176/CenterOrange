import axios from 'axios'
function http (url) {
  return axios({
    url: url
  })
}
export default http
