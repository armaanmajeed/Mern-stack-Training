// Importing
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require("./routes/user-routes");
const adminRoutes = require("./routes/admin-routes");
const HttpError = require("./utils/http-error");

// Configuration
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

// Connection string & Listening
mongoose.connect('Connection String', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
        app.listen(port, () => {
        console.log(`Server listening at http://127.0.0.1:${port}`);
    })
}).catch(err => {
    console.log(err);
})
