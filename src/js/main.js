import userProfile from './data/user';

const userSection = document.querySelector('#user');
const userInfoList = document.createElement('ul');

const mapboxgl = require('mapbox-gl');

const buildAvatar = (imgSrc, parent) => {
  const imageElement = document.createElement('img');
  imageElement.src = imgSrc;
  imageElement.classList.add('mx-auto')
  parent.appendChild(imageElement);
};

const buildName = (data, parent) => {
  const H2 = document.createElement('h2');
  const SPAN = document.createElement('span');
  H2.innerText = data;
  SPAN.innerText = 'Where in the world is';

  parent.appendChild(H2);
  H2.insertAdjacentElement('afterbegin', SPAN);
};

const buildEmail = (data, parent) => {
  const link = document.createElement('a');
  link.innerText = data;
  link.href = `mailto:${data}`;
  parent.appendChild(link);
}

const buildLocation = (data) => {
  const p = document.createElement('p');
  p.innerText = `Longitude: ${data[0]}, Latitude: ${data[1]}`;

}

const buildUser = (userData) => {
  buildAvatar(userData.avatar, userSection);
  buildName(userData.name, userSection);
  buildEmail(userData.email, userSection);
  buildEmail(userData.email, userSection);
  buildLocation(userData.longitude, userData.latitude, userSection);

  // for (const prop in userData) {
  //   const lineItemContent = `${prop}: ${userData[prop]}`;
  //   const lineItem = document.createElement('li');

  //   lineItem.innerText = lineItemContent;
  //   userInfoList.appendChild(lineItem);
  //   userSection.appendChild(userInfoList);
  // }
};

const buildMap = (longitude, latitude) => {
  mapboxgl.accessToken = process.env.NODE_ENV === 'production' ? process.env.API_KEY_MAPBOX : 'pk.eyJ1IjoiZGlhYmV0aWNvZGUiLCJhIjoiY2xia3Q2aXZ6MDBvNTN3cGQ3dDlnbjZvMCJ9.bcy3n2SuzOThsnufPNIzHg'
  const map = new mapboxgl.Map({
    container: 'map-container', // container ID
    style: 'mapbox://styles/diabeticode/clbkur6h9000314o2xxlspt7a', // style URL
    center: [longitude, latitude], // starting position [lng, lat]
    zoom: 6, // starting zoom
  });
};

(() => {
  buildUser(userProfile);
  buildMap(userProfile.longitude, userProfile.latitude);
})();
