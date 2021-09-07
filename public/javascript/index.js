const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    charactersAPI.getFullList()
      .then(response => {

        let text = ''

        response.data.reverse()
          .forEach(elm => text += `<li>Name:${elm.name}<br>Occupation:${elm.occupation}<br>Cartoon: ${elm.cartoon}<br>Weapon: ${elm.weapon}</li>`)
        console.log(document.querySelector('#fetch-all'))
        document.querySelector('#fetch-all').innerHTML = text
      })
      .catch(err => console.log('ERROR', err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    // console.log(valueId)
    charactersAPI.getOneRegister(1)
      .then(response => {

        const inputs = document.querySelectorAll('#fetch-one-input')
        const { name, occupation, cartoon, weapon } = response.data
        console.log(document.querySelectorAll('#fetch-one-input'))

      })
      .catch(err => console.error('ERROR', err))





  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
