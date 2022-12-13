import { faker } from '@faker-js/faker';

const avatar = faker.image.avatar();
const email = faker.internet.email();
const name = faker.name.firstName();
const latitude = Math.floor(Math.random() + (45 - 29 + 1)) + 29;
const longitude = Math.floor(Math.random() + ((-100) - (-123) + 1)) + (-123);
// const latitude = faker.address.latitude();
// const longitude = faker.address.longitude();

const userProfile = {
  avatar,
  email,
  name,
  latitude,
  longitude,
}

export default userProfile;