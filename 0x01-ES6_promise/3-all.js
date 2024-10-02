import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photo, user]) => {
      // Log the first name and last name
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
    });
}
