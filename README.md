# Ravenous

[React app](https://ravenous-iota.vercel.app/) for searching locals restaurants. Users can view a list of businesses that match their query, sorted by best match, highest rated, or most reviews.

App was developed during the [Codeckademy course](https://www.codecademy.com/learn/paths/build-web-apps-with-react).

## Before use

Visit https://cors-anywhere.herokuapp.com/corsdemo and click "Request temporary access to the demo server".

## Technology stack

<img height="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"><img height="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"><img height="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png">

## How to run locally

1. Clone the Repository
<pre>git clone https://github.com/marymih/ravenous.git</pre>
2. cd into Ravenous
<pre>git clone cd Ravenous</pre>
3. Install all dependencies
<pre>npm install</pre>
4. Start Local Server
<pre>npm start</pre>

## To get Yelp API key

1. Navigate to the "Manage App" section of the [documentation page](https://www.yelp.com/developers/v3/manage_app).

2. Create a new app and fill out the required fields for your app. Agree to the terms and conditions and create the app.

## To use Yelp API key in the app

1. Create a .env file in the root directory of your project.
   
2. Add your Yelp API key in the form of NAME=VALUE (as in example.env file).
