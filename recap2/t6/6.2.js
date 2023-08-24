'use strict';

const movies = [];

let more = true;
while (more) {
  const title = prompt('syötä elokuvan nimi');
  const rating = prompt('syötä arvio (1-5)');
  const movie = {title, rating};
  movies.push(movie);
  more = confirm('haluatko jatkaa syöttöä?');
}
/*
const movies = [
  {title: 'star wars', rating: '4'},
  {title: 'batman', rating: '2'},
  {title: 'barbie', rating: '5'},
  {title: 'Tuntematon sotilas', rating: '3'},
];
*/
function sortMovies(a, b) {
  const vertailu = b.rating - a.rating;
  return vertailu;
}

movies.sort(sortMovies);

console.log(movies);

for (let movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('kohde').append(tr);
}

const favourite = movies[0];
document.getElementById('fav').innerHTML = favourite.title;
