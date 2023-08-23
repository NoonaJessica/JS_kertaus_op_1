'use strict';

const sivuA = prompt('enter the length of the first side of the triangle');
const sivuB = prompt('enter the length of one side of the triangle');
const sivuC = prompt('enter the length of the third side of the triangle');

let tyyppi = '';
 // jos sivut ovat kaikki yhtä pitkiä --> tasasivuinen Kolmio

if (sivuA === sivuB && sivuB === sivuC){
  tyyppi ='equilateral triangle';
}
 else if ( sivuA === sivuB || sivuA === sivuC ||  sivuC === sivuB){
  // jos kaksi sivuista ovat yhtä pitkiä --> tasakylkinen Kolmio
  tyyppi ='isosceles triangle';
}
 else if(sivuA !== sivuB && sivuC !== sivuA && sivuC !== sivuB){
  // jos kaikki sivut eripituisia --> epäsäännöllinen Kolmio
  tyyppi = 'irregular triangle';
}


document.getElementById('kohde').insertAdjacentText('beforeend', 'A type of triangle: ' + tyyppi);


