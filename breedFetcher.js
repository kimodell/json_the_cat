const request = require('request');
//declare variable to take command line arg for specific breed name
//const breed = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv.slice(2)}`;

const fetchBreedDescription = function(breedName, callback) {

  request(breed, (error, response, body) => {
    if (error) {
      //call the callback with error or null if there is no error
      callback(error, null);
    } else {
      //convert string into an object
      const data = JSON.parse(body);
      //check if array is not empty, and if it is not, print the first element
      if (data.length > 0) {
        console.log(data[0].description);
      } else {
        console.log('Breed not found');
      }
    }
  });
};

module.exports {
  fetchBreedDescription
};