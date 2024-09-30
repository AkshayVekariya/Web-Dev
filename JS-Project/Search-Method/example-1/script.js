

const movies = [
  {
    name: "Inception",
    releaseYear: 2010,
    type: "Science Fiction",
    rating: 9.1,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
  },
  {
    name: "The Godfather",
    releaseYear: 1972,
    type: "Crime",
    rating: 5.5,
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    name: "The Dark Knight",
    releaseYear: 2008,
    type: "Action",
    rating: 6,
    description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
  },
  {
    name: "Pulp Fiction",
    releaseYear: 1994,
    type: "Crime",
    rating: 9,
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    name: "Forrest Gump",
    releaseYear: 1994,
    type: "Drama",
    rating: 10,
    description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75."
  },
  {
    name: "The Matrix",
    releaseYear: 1999,
    type: "Science Fiction",
    rating: 7.1,
    description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    name: "The Shawshank Redemption",
    releaseYear: 1994,
    type: "Drama",
    rating: 9,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    name: "Fight Club",
    releaseYear: 1999,
    type: "Drama",
    rating: 2,
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
  },
  {
    name: "Titanic",
    releaseYear: 1997,
    type: "Romance",
    rating: 3,
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    releaseYear: 2003,
    type: "Fantasy",
    rating: 4,
    description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
  },
  {
    name: "Star Wars: Episode IV - A New Hope",
    releaseYear: 1977,
    type: "Science Fiction",
    rating: 5,
    description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station."
  },
  {
    name: "Gladiator",
    releaseYear: 2000,
    type: "Action",
    rating: 6,
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
  },
  {
    name: "The Lion King",
    releaseYear: 1994,
    type: "Animation",
    rating: 7,
    description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  },
  {
    name: "Jurassic Park",
    releaseYear: 1993,
    type: "Adventure",
    rating: 7,
    description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok."
  },
  {
    name: "Interstellar",
    releaseYear: 2014,
    type: "Science Fiction,War",
    rating: 8,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    name: "The Silence of the Lambs",
    releaseYear: 1991,
    type: "Thriller,War",
    rating: 9,
    description: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to catch another serial killer, a madman who skins his victims."
  },
  {
    name: "Saving Private Ryan",
    releaseYear: 1998,
    type: "War",
    rating: 2.1,
    description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
  },
  {
    name: "Schindler's List",
    releaseYear: 1993,
    type: "Biography",
    rating: 9.1,
    description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
  },
  {
    name: "The Green Mile",
    releaseYear: 1999,
    type: "Drama,Biography ",
    rating: 9.1,
    description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
  },
  {
    name: "Braveheart",
    releaseYear: 1995,
    type: "Biography",
    rating: 9.1,
    description: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England."
  }
];

const store = document.getElementById("container");
const search = document.getElementById("search-method");


function displayList(List) {
  console.log(List)
  const moviesListItem = List.map(function (value) {
    return `<div class="item">
    <h1> Name :-${value.name}</h1>
    <p>releaseYear:-${value.releaseYear}</p>
    <span>type:- ${value.type}</span>
    <span>rating:- ${value.rating}</span>
    <p>details:- ${value.description}  </div>`
  });
  store.innerHTML = moviesListItem.join("");
}


function searchMethod() {

  const inputValue = search.value.toLowerCase();
  const notNumber = isNaN(inputValue)

  let filteredList;

  if (notNumber) {

    filteredList = movies.filter(function (value) {
      if (value.name.toLowerCase().includes(inputValue) || value.type.toLowerCase().includes(inputValue)) {
        return true
      }
      return false
    });
  } else {
    filteredList = movies.filter(function (value) {
      if (value.rating >= inputValue) {
        return true;
      }
      return false
    });
  }
  displayList(filteredList)
}

searchMethod(movies);
