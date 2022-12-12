import { faker } from '@faker-js/faker';

const avatar = faker.image.avatar();
const email = faker.internet.email();
const name = faker.name.firstName();
const latitude = faker.address.latitude();
const longitude = faker.address.longitude();

const userProfile = {
  avatar,
  email,
  name,
  latitude,
  longitude,
}

export default userProfile;