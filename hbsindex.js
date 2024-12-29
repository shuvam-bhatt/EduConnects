const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set up Handlebars as the templating engine
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: false, // Disable default layout
}));
app.set('view engine', 'hbs');

// Serve static files (if any, like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to render the lander.hbs file
app.get('/', (req, res) => {
  res.render('lander');  // Render the 'lander.hbs' view
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
