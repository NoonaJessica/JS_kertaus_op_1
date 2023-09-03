'use strict';

const target = document.getElementById('target');
const browserInfo = `${navigator.appName}, ${navigator.appVersion}`;
const OSInfo = navigator.platform;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const availableWidth = window.screen.availWidth;
const availableHeight = window.screen.availHeight;

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};
const locale = 'fi-FI';
const currentDate = new Date().toLocaleDateString(locale, options);

const Info = document.createElement('p');
Info.textContent = `Selain: ${browserInfo}`;

const InfoP = document.createElement('p');
InfoP.textContent = `OS: ${OSInfo}`;

const screenSize = document.createElement('p');
screenSize.textContent = `Näytön koko: ${screenWidth}x${screenHeight}`;

const availableSpace = document.createElement('p');
availableSpace.textContent = `Vapaa tila: ${availableWidth}x${availableHeight}`;

const dateTime = document.createElement('p');
dateTime.textContent = `Päivä ja kellon aika: ${currentDate}`;

target.appendChild(Info);
target.appendChild(InfoP);
target.appendChild(screenSize);
target.appendChild(availableSpace);
target.appendChild(dateTime);
