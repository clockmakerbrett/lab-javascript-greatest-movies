// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {
  let directors = movies.map((movie) => {
    return movie.director;
  });
  return directors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
  let filteredMovies = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return filteredMovies.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const roundNumber = (number, digits) => {
  let divisor = 10 ** digits;
  return Math.round(number * divisor) / divisor;
};

const ratesAverage = (movies) => {
  if (!movies.length) {
    return 0;
  }
  const rates = movies
    .map((movie) => movie.rate)
    .map((rate) => {
      if (typeof rate === "number") {
        return rate;
      } else {
        return 0;
      }
    });

  const sum = rates.reduce((accumulator, rate) => accumulator + rate, 0);
  const average = sum / rates.length;

  return roundNumber(average, 2);
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  if (!movies.length) {
    return 0;
  }
  const rates = movies.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  return ratesAverage(rates);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
  const array = [...movies];
  array.sort((first, second) => {
    if (first.year > second.year) {
      return 1;
    } else if (first.year < second.year) {
      return -1;
    } else if (first.title > second.title) {
      return 1;
    } else {
      return -1;
    }
  });
  return array;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
  let orderedArray = movies
    .map((movie) => movie.title)
    .sort((first, second) => {
      return first.localeCompare(second);
    });
  orderedArray.splice(20);
  return orderedArray;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
