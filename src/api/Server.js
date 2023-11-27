import axios from 'axios'

export default class Server {
  conn

  constructor() {
    this.conn = axios.create({
      baseURL: '',
      timeout: 3000,
      headers: {
        Authorization: ''
      }
    })
  }

  async getData(rota) {
    var response = {}
    return await this.conn
      .get(rota)
      .then((res) => (response = res))
      .catch((err) => alert('api error'))
    
    return response
  }

  async postData(rota, data) {
    var response = {}
    return await this.conn
      .post(rota, data)
      .then((res) => (response = res))
      .catch((err) => alert('api error'))

    return response
  }
}
