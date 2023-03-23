const info = {
  name: "Le",
  countries: [
    {
      name: "Singapore",
      year: 2018
    },
    {
      name: "Malaysia",
      year: 2018
    }
  ]
}
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(info)
})
  .then(response => response.text())
  .then(result => console.log(result))  
  .catch(err => {
    console.error(err.message);
  });