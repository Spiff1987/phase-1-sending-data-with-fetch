// Add your code here


function submitData(name, email) {
  const data = { name: name, email: email };
  const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
  };
  return fetch('http://localhost:3000/users', options)
      .then(response => response.json())
      .then(data => {
          const newId = data.id;
        

          const element = document.createElement("P");
          const text = document.createTextNode("New User ID: " + newId);
          element.appendChild(text);
          document.body.appendChild(element);
      })
      .catch(error => {
          

          const element = document.createElement("P");
          const text = document.createTextNode("Error: " + error.message);
          element.appendChild(text);
          document.body.appendChild(element);
      });
}

// function submitData(name, email) {
//   const data = { name, email };
//   return fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(data => {
//       const id = data.id;
//       document.getElementById("output").innerHTML = id;
//     })
//     .catch(error => {
//       document.getElementById("output").innerHTML = error.message;
//     });
// }

