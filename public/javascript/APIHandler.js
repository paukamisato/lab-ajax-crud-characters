class APIHandler {

  constructor() {
    this.app = axios.create(
      { baseURL: 'https://minions-api.herokuapp.com/' }
    )
  }

  getFullList = () => this.app.get('/characters')

  getOneRegister = (id) => this.app.get(`/characters/${id}`)

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
