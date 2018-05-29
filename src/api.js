import axios from 'axios'

const API_ROOT = 'http://2013.deolhonasmetas.org.br/api/public/'

axios.defaults.baseURL = API_ROOT

export default {
  getDistricts () {
    return axios.get('/districts')
      .then(response => {
        return response.data.districts
      })
  },

  getGoals (id) {
    return axios.get('/goals?region_id=' + id)
      .then(response => {
        return response.data.goals
      })
  }
}
