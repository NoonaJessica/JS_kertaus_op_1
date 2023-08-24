'use strict';

const asteetC = +prompt('syötä celsius asteet');

const asteetF = (asteetC * 9/5) + 32;
const asteetK = asteetC + 273.15;

const vastaus =
`${asteetC}celsiuksina
 ${asteetF}ferenhaitteina
 ${asteetK} kelvineinä `;

//tulostus
document.getElementById('kohde').innerHTML = vastaus
