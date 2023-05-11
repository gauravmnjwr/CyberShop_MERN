<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>


> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MERN stack is the idea of using Javascript/Node for fullstack web development.

## Clone or Download

$ git clone https://github.com/gauravmnjwr/CyberShop_MERN.git

$ yarn # or npm i
```

## Project Structure
```terminal
LICENSE
package.json
backend/
   package.json
   .env (to create .env, check [prepare your secret session])
frontend/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^18.15.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd frontend          // go to client folder
$ yarn # or npm i    // npm install packages

## Server-side usage(PORT: 5000)
$ cd backend          // go to backend folder

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd frontend
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```

### Start

```terminal
$ cd root          // go to root folder
$ yarn # or npm i    // npm install packages
$ npm run dev      // run both servers in development mode
```

## Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
// remember to run this command in the root level, not the server level, so if you follow the documentation along, you may need to do `cd ..`
$ pwd
/Users/<your-name>/CyberShop_MERN
$ npm run deploy:heroku
```

### After creating heroku

if using webpack:
remember to update the file of [client/webpack.prod.js](https://github.com/amazingandyyy/mern/blob/master/client/webpack.prod.js)
```javascript
 'API_URI': JSON.stringify('https://your-super-amazing-heroku-app.herokuapp.com')
```
if using parcel
remember to update the file of [client/.env.production](https://github.com/amazingandyyy/mern/blob/master/client/.env.production.js)
```
 REACT_APP_API_URI=https://your-super-amazing-heroku-app.herokuapp.com
```
# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^1.4.0| bcryptjs: ^2.4.3
react: ^18.2.0 | colors: ^1.4.0
react-bootstrap: ^2.7.4 | dotenv: ^16.0.3
react-dom: ^18.2.0 | express: ^4.18.2
react-redux: ^8.0.5 | jsonwebtoken: ^9.0.0
react-router-dom: ^6.11.0 | mongoose: ^7.1.0
react-router-bootstrap: ^0.26.2 | morgan: ^1.10.0
redux-devtools-extension: ^2.13.9 |
redux: ^3.7.2 | 
redux-thunk: ^2.4.2 |
web-vitals: ^2.1.4 |

# Screenshots of this project


User visit public and Home page
![User visit public and Home page](https://github.com/gauravmnjwr/CyberShop_MERN/assets/91672896/f035d3d5-f6eb-4a76-8ac8-f9ed70946e87)


User can sign in or sign up!
![User can sign in or sign up](https://github.com/gauravmnjwr/CyberShop_MERN/assets/91672896/7f9ee4e2-81fa-4560-9b8b-cd07b7d17e68)



After signing in user can go to account route and make request to token-protected API endpoint
![After signing in user can go to profile route](https://github.com/gauravmnjwr/CyberShop_MERN/assets/91672896/a00bc27f-0e99-4a4d-b576-2c1dde36fdd2)





## Author
[gauravmunjewar](https://www.linkedin.com/in/gaurav-munjewar)
