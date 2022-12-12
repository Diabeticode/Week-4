import userProfile from './data/user';

const userSection = document.querySelector('#user');
const userInfoList = document.createElement('ul');

const mapboxgl = require('mapbox-gl');

const buildUser = (userData) => {
  for (const prop in userData) {
    const lineItemContent = `${prop}: ${userData[prop]}`;
    const lineItem = document.createElement('li');

    lineItem.innerText = lineItemContent;
    userInfoList.appendChild(lineItem);
    userSection.appendChild(userInfoList);
  }
};

(() => {
  console.log('Hello', userProfile);

  buildUser(userProfile);
//pk.eyJ1IjoiZGlhYmV0aWNvZGUiLCJhIjoiY2xia3Q2aXZ6MDBvNTN3cGQ3dDlnbjZvMCJ9.bcy3n2SuzOThsnufPNIzHg
  mapboxgl.accessToken =
    process.env.NODE_ENV === 'production' ? process.env.API_KEY_MAPBOX : 'broken';
  const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/diabeticode/clbkur6h9000314o2xxlspt7a', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
})();
