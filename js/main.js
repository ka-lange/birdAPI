//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

// const btn = document.querySelector('button');

// const state = document.querySelector('#stateSelect')

// btn.onclick = (event) => {
//     event.preventDefault();
//     console.log(state.value);
// };

function getFetch(){
  const state = document.querySelector('input').value.toUpperCase()
  console.log(state)
  const url = `https://api.ebird.org/v2/data/obs/US-${state}/recent?key=f09vcr44bsl4`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.getElementById('birdName').innerText = data[0].comName
        document.getElementById('location').innerText = data[0].locName
        document.getElementById('when').innerText = data[0].obsDt
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}