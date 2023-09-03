'use strict';

async function fetchData(url, options) {
  const respose = await fetch(url, options);
  if (!respose.ok) {
    console.log(respose);
  throw new Error(`Error in request: ${respose.status}`);
  }
  const json = await respose.json();
  return json;
}

(async function () {
  try {
    const user = {
      name: 'Meikäläinen',
      job: 'Kokemusasiantuntija',
    };
    const url = 'https://reqres.in/api/unknown/23';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      'body: JSON.stringify(user),'
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    alert(error.message);
  }
})();
