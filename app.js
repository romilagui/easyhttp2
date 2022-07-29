// Initialize variable 
const http = new EasyHTTP;

// Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
//console.log(users);
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Create user Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create Users
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Update Post 
//http.put('https://jsonplaceholder.typicode.com/users/2', data)
//.then(data => console.log(data))
//.catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));