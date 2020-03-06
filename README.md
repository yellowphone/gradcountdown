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
- Go to https://developer.twitter.com/ , create a Twitter project and get your keys and secrets! 
- REMEMBER: NEVER GIVE OUT YOUR KEYS AND SECRETS
- Fill out config.js, and run `npm start`. 
- Inside `app.js` in the `app.get('/tweet', (req, res))` GET request, you can config whatever tweet you want to send!

For deploying to GCP App Engine and creating the schedule of tweeting:
- Create a new App Engine project on GCP
- Make sure to have gcloud SDK installed
- run `gcloud config set project PROJECT_ID` (not PROJECT_NAME) inside gradcountdown directory
- Create a `cron.yaml` file inside the gradcountdown directory
- Inside `cron.yaml`, put this
~~~
cron:
  - description: daily tweet job
    url: /tweet
    schedule: every day 20:00
    timezone: US/Eastern
~~~
- Inside `cron.yaml`, you can adjust the schedule of your tweet. This cron job happens for me everyday at 8pm Eastern Time, and it hits the API/URL `/tweet`. You can find `/tweet` inside `app.js`.
- run `gcloud app deploy`
- run `gcloud app deploy cron.yaml`, click on the link and see your queued cron job.
- Deployed!
