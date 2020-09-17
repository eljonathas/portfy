import axios from 'axios'

/**
 * All project data is provided by Github API, and this
 * settings do not need changes
 * 
 * @baseURL receive your API base URL
 */

const api = axios.create({
    baseURL: 'https://api.github.com/'
})

export default api