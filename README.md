# Homework #1

## Instructions
---
1. Feynman Writing Prompts - Write out explanations of the following concepts like you are explaining it to a 12 year old.  Doing this will help you quickly discover any holes in your understanding.  Ask your questions on Slack.
		
	* Node: allows you to use modules for web development (NPM lets you manage your node modules)
	* Chrome's V8 Engine: a JS engine for the web browser; it compiles and executes JS and can maniuplate the browser DOM
	* GET request: any time a web users wants something from your website by accessing a URL
	* Server: used to run web applications, otherwise a web app wouldn't be able to be dynamic and get/put data
	* express: used to organize your web app using a MVC framework (though not part of the MVC)


2. Fork and clone this repo.
		
	* Run the command `npm init` to create a `package.json` file.
	* Install express `npm install --save express`
	* Create a file called `server.js`.
	* `require` express and create your server app.
	* Tell your app to listen to port `5000` and then start your server with `node server.js`. (Install `nodemon` globally if you would like. `npm install -g nodemon`)
	* Add a route called `/name` that returns your name.
  	* Add a route called `/friends` that returns an array of some of your friends' names.
  	* Add a route called `/favorite-film` that returns an object that has details about one of your favorite movies.
  	* All of these routes are just handling `GET` requests.



#### Congratulations on finishing Homework #1!

For more information about our other courses visit: https://www.lambdaschool.com
