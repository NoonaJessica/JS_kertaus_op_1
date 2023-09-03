'use strict';

async function postData() {
  try {
    const url = 'https://reqres.in/api/users';
    const data = {
      name: 'Meikäläinen',
      job: 'kokemusasiantuntija',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log('Response Data:', responseData);
  } catch (error) {
    console.error('Error:', error);
  }
}

postData();
