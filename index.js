const express = require('express');
const route = require('./config/rout'); // Import the routes module
const app = express();
app.use(route); // Use the routes defined in the routes module
app.get('/', (req, res) => {
  res.send('homepage'); // Render the homepage view
});
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.use('/public', express.static('public')); // Serve static files from the 'public'
// directory
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});