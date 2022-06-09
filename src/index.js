// const axios = require('axios');


const state = {
  temp: parseInt(document.getElementById('fahrenheit').innerHTML),
};

const setTemp = () => {
  const upButton = document.getElementById('up-button');
  const downButton = document.getElementById('down-button');
  const tempContainer = document.getElementById('fahrenheit');

  upButton.addEventListener('click', () => {
    state.temp += 1;
    changeGarden();
    changeTempColor(state.temp, tempContainer);
    tempContainer.textContent = `${state.temp}`;
  });
  downButton.addEventListener('click', () => {
    state.temp -= 1;
    changeGarden();
    changeTempColor(state.temp, tempContainer);
    tempContainer.textContent = `${state.temp}`;
  });
};

const changeGarden = () => {
  const landscape = document.querySelector('#landscape');

  if (state.temp >= 80) {
    landscape.textContent = '🌵🌞🌊🐍🦂🌵🌞🌊🐍🏜';
  } else if (state.temp < 80 && state.temp >= 70) {
    landscape.textContent = '🌸🌿🌼🌷🌻🌿🌱🌻🌷';
  } else if (state.temp < 70 && state.temp >= 60) {
    landscape.textContent = '🌾🌾🍃🪨🛤🌾🌾🌾🍃';
  } else {
    landscape.textContent = '🌲⛄️🌲⛄️🍂🌲🍁🌲⛄️🍂🌲';
  }
};

const changeTempColor = (temp, text) => {
  if (temp >= 80) {
    text.style.color = 'red';
  } else if (temp < 80 && temp >= 70) {
    text.style.color = 'orange';
  } else if (temp < 70 && temp >= 60) {
    text.style.color = 'yellow';
  } else if (temp < 60 && temp >= 50) {
    text.style.color = 'green';
  } else {
    text.style.color = 'blue';
  }
};

const changeCity = () => {
  const cityContainer = document.getElementById('current-city');
  const input = document.getElementById('city-selector');
  input.addEventListener('change', (e) => {
    cityContainer.textContent = e.target.value;
  });
};

const getRealTemp = () => {
  const tempContainer = document.getElementById('fahrenheit');
  const apiButton = document.getElementById('API-button');
  apiButton.addEventListener('click', apiCalls);
};

const apiCalls = () => {
  const currentCity = document.getElementById('current-city').innerHTML;
  // axios
  //   .get('https://us1.locationiq.com/v1/search.php', {
  //     params: {
  //       key: process.env['api_key'],
  //       q: currentCity,
  //       format: 'json',
  //     },
  //   })
  //   .then((response) => {
  //     console.log('Latitude ' + response.data[0].lat);
  //     console.log('Longitude ' + response.data[0].lon);
  //   })
  //   .catch((error) => {
  //     console.log('Error');
  //   });
  console.log(currentCity);
};

const selectSky = () => {
  const skyCondition = document.getElementById('sky-condition');
  
  // Add select options to the sky selector 
  const rainy = document.createElement('option');
  rainy.value = 'rainy'
  rainy.text = 'Rainy'
  const cloudy = document.createElement('option');
  cloudy.value = 'cloudy'
  cloudy.text = 'Cloudy'
  const snowy = document.createElement('option');
  snowy.value = 'snowy'
  snowy.text = 'Snowy'
  const sunny = document.createElement('option');
  sunny.value = 'sunny'
  sunny.text = 'Sunny'
  skyCondition.add(rainy);
  skyCondition.add(cloudy);
  skyCondition.add(snowy);
  skyCondition.add(sunny);

  // Listen for new sky selection
  skyCondition.addEventListener('change', () => {
    changeSky(skyCondition)
  });
}

const changeSky = (skyCondition) => {
  const selectedSky = skyCondition.options[skyCondition.selectedIndex].value;
  let skyGIF = document.getElementById('sky-gif')
  
  if (selectedSky === 'rainy') {
    skyGIF.src = 'images/rainy-gif.webp';
  } else if (selectedSky === 'cloudy') {
    skyGIF.src = 'images/cloudy-gif.gif';
  } else if (selectedSky === 'snowy') {
    skyGIF.src = 'images/snowy-gif.gif';
  } else if (selectedSky === 'sunny') {
    skyGIF.src = 'images/sunny-gif.gif';
  }
  
}

// note for refactoring: curious if the following calls could be made into one call
document.addEventListener('DOMContentLoaded', setTemp);
document.addEventListener('DOMContentLoaded', changeCity);
document.addEventListener('DOMContentLoaded', getRealTemp);
document.addEventListener('DOMContentLoaded', selectSky);
