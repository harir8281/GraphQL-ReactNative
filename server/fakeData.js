const UserList = [
  {
    id: 1,
    name: "Jhon",
    username: "jhon1",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Ed-sheeran",
        username: "sheeran2",
        age: 26,
        nationality: "ENGLAND",
      },
      {
        id: 3,
        name: "Muller",
        username: "muller3",
        age: 39,
        nationality: "GERMANY",
      },
    ],
  },
  {
    id: 2,
    name: "Ed-sheeran",
    username: "sheeran2",
    age: 26,
    nationality: "ENGLAND",
    FavoriteMovies: [
      {
        id: 1,
        name: "end game",
        year: 2022,
        isInTheatre: true,
      },
      {
        id: 2,
        name: "interstellar",
        year: 2018,
        isInTheatre: true,
      },
    ],
  },
  {
    id: 3,
    name: "Muller",
    username: "muller3",
    age: 39,
    nationality: "GERMANY",
  },
  {
    id: 4,
    name: "Francis",
    username: "francis4",
    age: 24,
    nationality: "FRANCE",
  },
  {
    id: 5,
    name: "Thomas",
    username: "thom5",
    age: 30,
    nationality: "UKRINE",
  },
];

const MovieList = [
  {
    id: 1,
    name: "end game",
    year: 2022,
    isInTheatre: true,
  },
  {
    id: 2,
    name: "interstellar",
    year: 2018,
    isInTheatre: true,
  },
  {
    id: 3,
    name: "Kgf 3",
    year: 2024,
    isInTheatre: false,
  },
];

module.exports = { UserList, MovieList };
