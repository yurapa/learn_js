/*

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

* */

const requestURL = 'https://jsonplaceholder.typicode.com/users';

const newUser = {
  name: 'Yurka',
  age: '33'
}

function getUsers(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method: method,
    body: body ? JSON.stringify(body) : null,
    headers: headers
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
}

getUsers('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))

getUsers('POST', requestURL, newUser)
  .then(data => console.log(data))
  .catch(err => console.log(err))

