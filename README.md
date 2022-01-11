# Chat Room 1.0

Chat Room is a simple chatting website, where you can talk with other people in real time.

A live version of the app can be viewed here: [ChatRoom](https://richard-nagy.github.io/ChatRoom/) 

### Technologies and Tools
To create this project, the main tools and technologies I used are:
- [React](https://reactjs.org/): Javascript libary I built the website in
-  [Firebase Firestore](https://firebase.google.com/docs/firestore): Database provider and  backend
- [Figma](https://www.figma.com/): A design tool where I created my [design plans](https://www.figma.com/proto/ij97OXAdQyjKWBcM3Z70KK/Chat-Room?node-id=27%3A47&scaling=min-zoom&page-id=27%3A46)
- CSS: Styling of the website
- [GitHub](https://github.com/): The [develop branch](https://github.com/richard-nagy/ChatRoom/tree/develop) for working and the [main branch](https://github.com/richard-nagy/ChatRoom/tree/main) for relase
- [GitHub Pages](https://pages.github.com/): Implement a [live version of the website](https://richard-nagy.github.io/ChatRoom/) 

### Features
- Enter your username
- Choosable icon and name color
- Live connection with other people
- Time stamp of messages
- Screen compability down until 320px

### How To Use The Website

Upon opening the website, we are greeted by a small window, where we must **choose a color and add a username**.  By default the color red is choosen, but there is 5 more option to choose from. **The username must have a length between 3-15 character, and can only contain numbers and the letters of the english alphabet**. After adding a correct name, the user can proceed forward by pressing enter, or clicking the *Let's Go* button.

In the center of the screen is the chat window.
At the top is a bar, with the name *Chat Room* and a GitHub link, to this repository.
In the center we can see the messages. Every message contains a colored circle, colored use rname, a time stamp, and it's self the message.
At the bottom there is a text area, and a send button with a pigeon on it. **To send a message the user must type the desired message in the text area, and press the send button, or press enter**.  After this the message will be uploaded to the Firestore database, and the message will apear at the bottom of the messages. **If the text area is empty, or only contains spaces, the message will not be sent.**

Until the website is closed or refreshed, this process can be repeated, without the need of changing user name or choosing a new color. **If the user wants to change name or choose a new color, the page must be reloaded.**

At a time there can be only 15 messages at a time, so **if there is more then 15 messages in the database, the oldest one will be deleted.**

### Code Examples

- [Pull data from Firestore and store them in a state](https://github.com/richard-nagy/ChatRoom/blob/8a4e32116b3386334d205cb33a9315d8f6fa2264/src/App.js#L14)
- [Check if there is more then 15 messages and delete the oldest one if there is](https://github.com/richard-nagy/ChatRoom/blob/develop/src/App.js#L38)
- [Draw colored circles based on colors from an array](https://github.com/richard-nagy/ChatRoom/blob/8a4e32116b3386334d205cb33a9315d8f6fa2264/src/Select.js#L9)
- [Check if name only contains numbers and the letters of the english alphabet](https://github.com/richard-nagy/ChatRoom/blob/8a4e32116b3386334d205cb33a9315d8f6fa2264/src/Select.js#L29)

### Future Implementations
In the future, if I'm still going to work on this project the implementations I wish to achieve are:
- Registration and log in system
- Changeable color and user name
- More choosable rooms

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
