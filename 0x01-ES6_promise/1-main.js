import getFullResponseFromAPI from './1-promise';

// Testing the function with true
getFullResponseFromAPI(true)
  .then(response => console.log(response)) // Handle resolved promise
  .catch(error => console.error(error)); // Handle rejected promise

// Testing the function with false
getFullResponseFromAPI(false)
  .then(response => console.log(response)) // Handle resolved promise
  .catch(error => console.error(error)); // Handle rejected promise
