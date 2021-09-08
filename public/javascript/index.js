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
    const characterId = document.getElementById('fetch-one-input').value
    charactersAPI.getOneRegister(characterId)
      .then(response => {

        const inputs = document.querySelectorAll('#fetch-one-input')
        const { name, occupation, cartoon, weapon } = response.data
        console.log(name, occupation, cartoon, weapon)
        inputs[0].value = name
        inputs[1].value = occupation
        inputs[2].value = cartoon
        inputs[3].value = weapon
        
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
