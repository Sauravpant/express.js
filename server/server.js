const express = require('express')

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Home page');
  console.log("On home page");
})

app.post('/login', (req, res) => {
  const { name, email, password } = req.body;

  console.log("User info: " + name + " " + email + " " + password);
  res.status(200).json({
    mesaage: "Data received successfully",
    name, email, password
  })
})

app.listen(3000, () => {
  console.log("Server listening on port 3000");
})