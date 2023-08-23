'use strict';

const sivuA = prompt('anna kolmion ensimmäisen kyljen pituus');
const sivuB = prompt('anna kolmion toisen kyljen pituus');
const sivuC = prompt('anna kolmion kolmannen kyljen pituus');

let tyyppi = '';

if ( sivuA === sivuB && sivuB === sivuC){
  // jos sivut ovat kaikki yhtä pitkiä --> tasasivuinen Kolmio
  tyyppi ='tasasivuinen kolmio';
}
else if ( sivuA === sivuB || sivuA === sivuC ||  sivuC === sivuB){
  // jos kaksi sivuista ovat yhtä pitkiä --> tasakylkinen Kolmio
  tyyppi ='tasakylkinen kolmio';
}
else if(sivuA !== sivuB && sivuC !== sivuA && sivuC !== sivuB){
  // jos kaikki sivut eripituisia --> epäsäännöllinen Kolmio
  tyyppi = 'epäsäännöllinen kolmio';
}


document.getElementById('kohde').insertAdjacentElement('beforeend', tyyppi);
