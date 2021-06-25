// Import Statements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const HttpError = require('./utils/http-error');


// Configuration Statements
const port = 3000;
app.use(bodyParser.json());

// Routing
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);

// Error Handling
app.use((req, res, next) => {
    const error = new HttpError('Page not found', 404);
    throw error;
});

app.use((error, req, res, next) => {
    res.status(error.code);
    res.json({Message: error.message || 'Unknown error occured', Code: error.code});
});

// Methods
// app.get("/about", (req, res) => {
//     res.send(JSON.stringify({Page: "About Page", Message: "This is the about page"}));
// });

// app.post("/login", (req, res) => {
//     res.send(JSON.stringify({Page: "Login", Message: "Please enter the credentials"}));
// });

// Server Listening
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});