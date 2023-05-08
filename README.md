# Matsune Hiku's Wesbite

The purpose of this project is to demonstrate the skills I've learned in React. The application is supposed to represent a mock website for a fictional singer/artist named Matsune Hiku. The project is built using mostly React/JavaScript with some HTML and CSS.

## Installation

To install this project, follow these steps:

1. Fork and clone the repo
2. Open the terminal within the project and type: `$ npm install react-router-dom@5` (Note we are installing v5 and not v6)
3. Then type within the terminal: `$ json-server --watch db.json`
4. Opening a new terminal (do not close the previous) type: `$ npm start`
5. When prompted with `Would you like to run the app on another port instead?` type `Y`

You will know everything is working properly when you see the following in the terminals:

Terminal 1: `$ json-server --watch db.json` 
```bash
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/songs

  Home
  http://localhost:3000
```

Terminal 2: `$ npm start`
```bash 
Compiled successfully!

You can now view phase-2-project in the browser.

  Local:            http://localhost:****
  On Your Network:  http://***.**.**.**:****

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
The website should automatically open and is fully functional. If the website does open for whatever reason, in the same terminal you ran `npm start` you will see a local website (`http://localhost:`). Simply navigate to that website. 

## Usage/Features

The application is designed to function as a website so feel free to navigate it as such. There are tabs to help you get through different parts of the web app. `Home` is the home page and will display some information about Hiku. `Songs` will display a list of Hiku's songs. Each song will display the name, duration, genre, and a link to `see more`. When the link is clicked, you will be navigated to the song's detail page where you will also see a brief description of the song. `New Song` will display a controlled form where Hiku can add more songs to `Songs`. Upon completing the form you will be programmatically navigated to the song's detail page. 

Features:
- Use of { BrowserRouter } allowing the ability to `route` to different components
- Navigation Bar Includes: 
    1. `Home`
    2. `Songs`
    3. `New Song`
- `New Song` contains a controlled form using { useState }
- Use of `db.json` as API
- Use of `GET` and `POST` fetch requests
- Use of programmatic navigation 

## Disclaimer

This project was designed as an assignment for Flatiron School. All images and content is for educational purposes. 

## Contact

If you have any questions or concerns about this project, feel free to contact me at `jesseilc123@gmail.com`.