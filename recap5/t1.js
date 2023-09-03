'use strict';

async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/users/1');
    if (!response.ok) {
      throw new Error(`error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
