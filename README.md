Application site to display world news and weather using React and Redux. API what I used is https://gnews.io/ and https://openweathermap.org/api.
That is not the final version and I continue to practice on this project.

You can see how the aplication work at https://orest-forest.github.io/news-app/.

# General functionality:
* Authenticate user (login + logout button on profile page)
(Login: admin, password: 12345)
* Site have 4 clickable pages
* Page news show latest world news
* On weather page you can you can see the weather in city what you enter

# Known errors
* When the page is refreshed, the application crashes
(In a single-page app the server needs to know the possible URLs as well and respond at least with an HTML page that starts the app. As far as I know, a catch-all isn’t possible on GitHub pages since they are completely static. So if you want to see how app working you need run my app by link https://orest-forest.github.io/news-app/ and dont refreshed pages)
* If you enter a nonexistent city on weather page, the application crashes

# Future plans for this project
* Expand displayed weather information
* Add css styles on weather component
* Fix crash when enter a nonexistent city (I think redux saga can help me with it)
* Fix refreshed (probably change host)

# To get the frontend running locally:

* clone this repository
* npm install to install all required dependencies
* npm start to start the local server (this project uses create-react-app)


