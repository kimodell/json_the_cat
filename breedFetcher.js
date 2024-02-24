const request = require('request');
//declare variable to take command line arg for specific breed name
//const breed = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv.slice(2)}`;

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      //call the callback with error or null if there is no error
      callback(error, null);
    } else {
      //convert string into an object
      const data = JSON.parse(body);
      //check if array is not empty
      if (data.length > 0) {
        //Call callback with null as the error and description/result as second argument
        callback(null, data[0].description);
      } else {
        //Call the callback error message and null description
        callback('Breed not found', null);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};