# gradcountdown

### Cheers!

How to run:
- git clone the repository
- cd into `gradcountdown`
- run `npm install`
- run `npm start` (if you don't have nodejs installed, please install)
- Open a browser and go to "http://localhost:8080"

Twitter config:
- Create a file called `config.js` in the gradcountdown repository
- Inside `config.js`, put this inside the file:
~~~
module.exports = {
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
}
~~~
- Go to https://tweeterbot-270223.appspot.com , create a Twitter project and get your keys and secrets! 
- REMEMBER: NEVER GIVE OUT YOUR KEYS AND SECRETS
- Fill out config.js, and run `npm start`. 
- Inside app.js, you can config whatever tweet you want to send!
