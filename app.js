const express = require('express');
const app = express();
var schedule = require('node-schedule');
var config = require('./config.js');
var Twitter = require('twitter');
var client = new Twitter(config);

// Just to say something nice when it is running
app.get('/', (req, res) => {
    res.send("Hello, World!")
    res.end();
})

// Tweet API that the cron job will hit at a specific time
app.get('/tweet', (req, res) => {
    res.send("Tweet!!")
    res.end();
    // adjust your tweet here at status
    client.post('statuses/update', {status: "Good morning, and in case I don't see ya, good afternoon, good evening, and good night!"}, function(error, tweet, response) {
        if (error) throw error;
        console.log(tweet);
        // for debug help:
        // console.log(response);
    })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Run http://localhost:8080')
    console.log('Press Ctrl+C to quit.');
})

module.exports = app;