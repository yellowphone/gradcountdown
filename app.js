const express = require('express');
const app = express();
var schedule = require('node-schedule');
var config = require('./config.js');
var Twitter = require('twitter');
var client = new Twitter(config);

var j = schedule.scheduleJob('00 30 19 * * *', function() {
    let date_ob = new Date();
    console.log("test every day");
    let date = ("0", date_ob.getDate())
    let month = ("0" + (date_ob.getMonth() + 1))
    console.log(month + "/" + date + " " + date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds())
    client.post('statuses/update', {status: "Good morning, and in case I don't see ya, good afternoon, good evening, and good night!"}, function(error, tweet, response) {
        if (error) throw error;
        console.log(tweet);
        console.log(response);
    })
})

app.get('/', (req, res) => {
    res.send("Hello, World!")
    res.end();
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Run http://localhost:8080')
    console.log('Press Ctrl+C to quit.');
})

module.exports = app;