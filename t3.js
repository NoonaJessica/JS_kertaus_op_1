'use strict';

const sivuA = prompt('anna kolmion ensimmäisen kyljen pituus');
const sivuB = prompt('anna kolmion toisen kyljen pituus');
const sivuC = prompt('anna kolmion kolmannen kyljen pituus');

// jos sivut ovat kaikki yhtä pitkiä --> tasasivuinen Kolmio
if ( sivuA === sivuB && sivuB === sivuC){
    console.log('tasasivuinen kolmio')
  }

// jos kaksi sivuista ovat yhtä pitkiä --> tasakylkinen Kolmio
if ( sivuA === sivuB || sivuA === sivuC ||  sivuC === sivuB){
  console.log('tasakylkinen kolmio')
}


// jos kaikki sivut eripituisia --> epäsäännöllinen Kolmio
if(sivuA !== sivuB && sivuC !== sivuA && sivuC !== sivuB){
      console.log('epäsäännöllinen kolmio')
    }

