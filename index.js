const express = require('express');
const app = express();
const path = require('path');

// Set up the view engine to use EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('lander');
});

app.get('/signin',(req, res)=>{
    res.render('signin');
})

app.get('/contact', (req, res) => {
    res.render('contact'); 
});

app.get('/courses', (req, res) => {
    res.render('courses'); 
});

app.get('/profile', (req, res) => {
    res.render('profile'); 
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
