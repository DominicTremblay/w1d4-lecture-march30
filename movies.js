const movies = [
  { title: 'Black Panther', year: 2018, genre: 'action', rating: 7.4 },
  { title: 'Avengers Infinity War', year: 2018, genre: 'action', rating: 8.5 },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Fantasy/Science Fiction',
    rating: 8.7
  },
  {
    title: 'Incredibles 2',
    year: 2018,
    genre: 'Science Fiction/Action',
    rating: 7.8
  },
  { title: 'Deadpool 2', year: 2018, genre: 'action', rating: 7.8 },
  { title: 'Ant-Man and the Wasp', year: 2018, genre: 'action', rating: 7.2 },
  {
    title: 'Venom',
    year: 2018,
    genre: 'Thriller/Science Fiction',
    rating: 6.8
  },
  {
    title: 'Ralph Breaks the Internet',
    year: 2018,
    genre: 'Comedy',
    rating: 7.3
  }
];

// Let's use our filter function!
const filter = function(list, callback) {
  // define a placeholder for the result
  const filteredList = [];

  // iterate throught the list

  for (let item of list) {
    // check that the number is div by three, add it
    if (callback(item)) {
      filteredList.push(item);
    }
  }

  // return the result
  return filteredList;
};

// EXAMPLE 1: Get the movies with highest ratings
const highestRatingMovies = filter(movies, movieObj => movieObj.rating >= 8);
// console.log(highestRatingMovies);

// EXAMPLE 2
// Create an update function
// we want to change the content of each element in the list and output a new array
// Let's create a flexible update function

const update = (list, callback) => {
  // define placeholder for the output array
  const updatedList = [];

  // Loop through the list of items
  for (let item of list) {
    // callback is applying a transformation on the element of the array
    updatedList.push(callback(item));
  }
  // give back the transformed array - contains all the elements, but each element changed
  return updatedList;
};

// callback -> tranform function
// The array will now contains strings
const updatedMovies = update(
  movies,
  movieObj =>
    `Title: ${movieObj.title} - Rating: ${movieObj.rating} - Year: ${movieObj.year}`
);

// Another transformation
// Rounding the rating and make it a String
const updatedRatings = update(movies, movieObj => {
  movieObj.rating = String(Math.round(movieObj.rating));
  return movieObj;
});

console.log(updatedRatings);

console.log(updatedMovies);
