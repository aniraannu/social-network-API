# Social Network API
This API allows users to create and manage a social network with features like creating profiles, creating posts, commenting on posts, and following other users. The API is built using NoSQL technologies and JavaScript.

## Description
This application is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.​This backend app that can be used for social media startups, uses a NoSQL database.It also uses Express.js for routing, and a MongoDB database. The Mongoose ODM is used to handle large amounts of unstructured data, including User and Thought models and schemas. We also made use of a subdocument in thoughts model . When the application is invoked, the server is started and Mongoose models are synced to the MongoDB database.

By using API GET routes in Insomnia Core for users and thoughts we can retrive the data from the database in the form of JSON. API POST, PUT, and DELETE routes in Insomnia Core successfully create, update, and delete users and thoughts in the database. API POST and DELETE routes is used to create and delete reactions to thoughts and add and remove friends to a user’s friend list.​

The following animation demonstrates the application functionality: 
![A user can input the logo text, text color, shape of the logo and logo color using the command prompt.](./assets/images/functionality.gif)

## Getting Started
* This is a social network API that uses MongoDB, a NoSQL database, which allows the website to handle large amounts of unstructured data.When the command to invoke the application is entered, the Mongoose models are synced to the MongoDB database.

![Image](./assets/images/Example3.png)

* When API GET routes for users and thoughts are opened in Insomnia, the data for each of the routes is displayed in formatted JSON. User, Friend, Thought, and Reaction routes are created to create the database and test the API on Insomnia.

1. User Routes: 
 A user can create a user with a username and valid email address. When created, each user is assigned a unique user ID.To create a user, click the POST request and enter the user's username and email address. Click Send. There are two GET requests that return user information. To return all users, click the Find All Users request, then click on Send. To return a single user, click the Find User by Id request. On the URL, enter the user's ID.

 ![Find All users](./assets/images/Example3.png)
 ![Find a single user by ID](./assets/images/Example3.png)

To update a user by ID, click the PUT request. On the URL, enter the ID of the user whose information is going to be updated. To delete a user by ID, click the DELETE request and enter the user's ID. A message that reads, "User and thoughts deleted!" will appear if the user has been deleted from the database. If there is no such user or user ID in the system, the message, "No user with this id!" is shown. Click Find All Users to see if the user has been deleted.

2. Friend Routes:
A user can add a friend and delete a friend.To add a friend, click the POST request. On the URL enter the user ID of the user who is adding a friend, then the user ID of the friend the user is adding. To see the user's friends, click Find All Users. The ID of the friends the user added are listed under "friends". The "friendCount" indicates the number of friends the user added.

To remove or delete a friend, click the DELETE request. On the URL enter the user ID of the user who is deleting a friend, then the user ID of the friend the user is deleting.To check if the friend has been removed from the user's friend list, click Find All Users.

3. Thought Routes:
A user can create a thought, get all thoughts or a single thought by ID, update a thought by ID, and delete a thought by ID. To create or add a thought, click the POST request. Enter the "thoughtText", "username", "userID" of the user creating the thought. To get all thoughts, click the GET All Thoughts request. All the thoughts that were created will appear, as well as the date and time they were created. Each created thought is assigned a unique thought ID. Click GET All Users to access the thought ID.

![Get all thoughts of a single user](./assets/images/Example3.png)

To get a thought by ID, click the GET Thought by Id request and enter the thought ID. To update a thought, click the PUT request. On the URL, enter the thought ID. Enter the necessary changes on the text body. To see the changes, click GET All Thoughts.

![Get a single thought](./assets/images/Example3.png)

To delete a thought by ID, click the DELETE request. On the URL, enter the thought ID that will be deleted. When the thought is successfully deleted, the text can no longer be found when you try to access it by clicking GET All Thoughts. The thought ID is also deleted when you click Find All Users.

4. Reaction Routes:
A user can create a reaction and delete a reaction.To create a reaction, click the POST request. On the URL, enter the ID of the thought the user is reacting or commenting on. Then enter the "reactionBody" and "username" of the user creating the reaction. Click on GET All Thoughtsto see the reaction, the username of the user who created the reaction, the reaction ID, date and time the reaction is created, and the user's reaction count.

![Get all thoughts](./assets/images/Example3.png)

To delete a reaction, click the DELETE request. On the URL, enter the ID of the thought the user created a reaction or commented on, then the reaction ID.The message, "No thought with this id!" will appear when a reaction is deleted or a reaction is not associated with a user ID.

MongoDB - After creating data on Insomnia, MongoDB also reflects the same data and changes that were made.

The whole workflow of the application is shown in the following video.
![Entire workflow of the application](./assets/images/application-demo.gif)

### Dependencies

* express 4.19.2
* mongoose 8.5.4
* nodemon 3.1.4

### Installing

* Clone the repo: git clone https://github.com/aniraannu/social-network-API

* Open in VS Code. If you do not have VS code you must install it.

* Using the terminal, install node.js v16. If you have homebrew, the command should look like the following (brew install node@16), however this may vary and the documentation should be consulted.

* Once node.js v16 is installed, in the terminal, utilize the command npm init -y to initialize and create a package.json where project files will be stored.

* Next, use the terminal to run the command npm i to install the dependencies associated with this application.Node.js and MongoDB is required to run the application

* To run the application, within the terminal, type the command node index.js.

### Executing program

* The application code can be cloned from the following Github link:
[GitHub-social-network-API](https://github.com/aniraannu/social-network-API)

## Help

NA

## Authors

Contributors names and contact info

Anira Raveendran
[@aniraannu](https://github.com/aniraannu)

## Version History

* 0.1
    * Initial Release

## License

None

## Acknowledgments

Inspiration, code snippets, etc.

* [dbader](https://github.com/dbader/readme-template)
* [stackflow](https://stackoverflow.com/)
* [chatGPT](https://chatgpt.com/)