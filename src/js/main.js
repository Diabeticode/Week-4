import userProfile from './data/user';

const userSection = document.querySelector('#user');
const userInfoList = document.createElement('ul');

const mapboxgl = require ('mapbox-gl');

const buildUser = (userData) => {
  for(const prop in userData){
    const lineItemContent = `${prop}: ${userData[prop]}`
    const lineItem = document.createElement('li');

    lineItem.innerText = lineItemContent;
    userInfoList.appendChild(lineItem)
    userSection.appendChild(userInfoList)
  }
}

(() =>{
  console.log("Hello", userProfile);

  buildUser(userProfile)
})()