## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Design decisions](#design-decisions)
* [Features](#features)
* [Architecture](#architecture)

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

## Design decisions
* Organizing posts e comments lists in a list of cards to better organize the comments on screen
* Clicking a post will open a Modal with the list of comments and a form to post your own comment
* Most of the styling is done via bootstrap, but some instances were done via custom CSS

## Features
* Fetching posts and comments from an API
* Clicking a post will open a modal with all the comments that post has
* Possibility to send your own comment to a post (will be stored on the context state)
* Responsive design

## Architecture:
src
    │   App.css
    │   App.tsx
    │   index.css
    │   index.tsx
    │   vite-env.d.ts
    │
    ├───config
    │       .env
    │
    ├───domain
    │       Comment.ts
    │       Post.ts
    │
    ├───modules
    │   └───posts
    │       ├───components
    │       │       index.ts
    │       │       PostCommentsForm.tsx
    │       │       PostCommentsList.tsx
    │       │       PostList.tsx
    │       │
    │       ├───context
    │       │       PostsContext.ts
    │       │
    │       ├───pages
    │       │       index.ts
    │       │       Posts.tsx
    │       │
    │       └───service
    │               CommentService.ts
    │               index.ts
    │               PostService.ts
    │
    ├───routes
    │       index.ts
    │       PageRoutes.tsx
    │
    └───shared
        ├───api
        │       Api.ts
        │       IApi.ts
        │
        ├───components
        │   │   AppBar.css
        │   │   AppBar.tsx
        │   │   AppPage.tsx
        │   │   CustomCard.tsx
        │   │   CustomModal.tsx
        │   │   index.ts
        │   │   PageTitle.tsx
        │   │
        │   └───layout
        │           index.ts
        │           Page.css
        │           Page.tsx
        │           PageContent.tsx
        │           TopBar.tsx
        │
        ├───hooks
        │       index.ts
        │       useToggle.tsx
        │
        └───providers
                index.tsx
