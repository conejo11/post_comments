## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Design decisions](#design-decisions)
* [Features](#features)

## General info
This project is a simple post/comment in React, fetching data from an API

## Technologies
Project is created with:
* React
* React Bootstrap
* React Router
* Vite
* TypeScript

## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm run dev
```

You may need to install Vite to properly run the project (in case you haven't installed it already)
```
$ npm install vite
```

## Design decisions
* Organizing posts e comments lists in a list of cards to better organize the comments on screen
* Clicking a post will open a Modal with the list of comments and a form to post your own comment
* Most of the styling is done via bootstrap, but some instances were done via custom CSS

## Features
* Fetching posts and comments from an API
* Clicking a post will open a modal with all the comments that post has
* Possibility to send your own comment to a post (will be stored in the context state)
* Responsive design
