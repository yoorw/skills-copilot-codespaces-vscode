// Create web server 
const express = require('express');
const app = express();
// Create a router 
const commentsRouter = express.Router();
// Add a route to the router 
commentsRouter.get('/', (req, res) => {
    res.json({ message: 'Comments' });
});
// Add router to the app
app.use('/comments', commentsRouter);
// Start the server
app.listen(3000, () => {
    console.log('Server started');
});