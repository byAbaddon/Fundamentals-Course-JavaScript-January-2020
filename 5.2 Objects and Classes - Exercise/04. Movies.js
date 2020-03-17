function movies(input) {
  let listMovies = [];
  let [result, splitted, movie, director] = ['', '', '', '']

  for (let el of input) {
    if (el.includes("addMovie")) {
      result = el.split("addMovie ").filter(x => x !== "");
      listMovies.push({
        name: result.join(" ")
      });
    } else if (el.includes(" directedBy ")) {
      splitted = el.split(" directedBy ").filter(x => x !== "");
      movie = splitted[0];
      director = splitted[1];
      result = listMovies.find(m => m.name === movie);
      if (result !== undefined) {
        result["director"] = director;
      }

    } else if (el.includes(" onDate ")) {
      splitted = el.split(" onDate ");
      movie = splitted[0];
      date = splitted[1];
      result = listMovies.find(m => m.name === movie);
      if (result !== undefined) {
        result["date"] = date;
      }
    }
  }
  
  for (let movie of listMovies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}


// movies([
//   'addMovie Fast and Furious',
//   'addMovie Godfather',
//   'Inception directedBy Christopher Nolan',
//   'Godfather directedBy Francis Ford Coppola',
//   'Godfather onDate 29.07.2018',
//   'Fast and Furious onDate 30.07.2018',
//   'Batman onDate 01.08.2018',
//   'Fast and Furious directedBy Rob Cohen'
// ]);