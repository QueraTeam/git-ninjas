interface IMovie {
  title: string;
  release: Date;
  rating: number;
}

function filterAndSortMovies(movies: IMovie[], beforeYear: number): IMovie[] {
  const filtered: IMovie[] = [];
  movies.forEach((movie) => {
    movie.release.getTime() < beforeYear ? filtered.push(movie) : null;
  });

  return filtered.sort((first, second) => {
    return first.rating - second.rating;
  });
}

export default filterAndSortMovies;

// const test1 = [
//   { title: "Schindler's List", release: new Date(1999), rating: 5 },

//   { title: "Lawrence of Arabia", release: new Date(1999), rating: 3 },

//   { title: "Spartacus", release: new Date(2001), rating: 4 },

//   { title: "Titanic", release: new Date(2001), rating: 4 },

//   { title: "12 Angry Men", release: new Date(2001), rating: 2 },
// ];

// filterAndSortMovies(test1, 2000);
