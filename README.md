# MERN Product Catalog
In this project I've implemented a simple, flexible and easy-to-use e-commerce Product Catalog, which can be complained, re-filled and updated by every authorized user.

Init MongoDB's collection filled with some basic goods: images, prices and description are borrowed from Internet.

Project is live into: 
`https://mern-product-catalog-d89f8bea5d4c.herokuapp.com/`


## Used Technologies

  To develop front- and back-end for Catalog, I've used best practicies and technologies: 
  - `JavaScript` as well as main programming language for both Front- and Back-end features;
  - `MongoDB` for simple and reliable data storage; 
  - `Mongo Atlas`, which provides a free Cloud DB services;
  - `React`, probably the best front-end library for native JS :);
  - `Node.js` as basic JS platform for Back-end development;
  - `Express`, old but pretty good Back-end framework, which provides a simplest way to create & configure web-server.

## Project description

Web-application provides an opportunity to create, update, remove or read list of goods (catalog), all of which stored into MongoDB Cloud Cluster.

Each good has: 
- `Title`, which can be represented as shorty description or name of good;
- `Price` in float number format (e.g. 15.99);
- `Image URL`, that can be a link from the Internet or local-stored image;
- `Description`, which contains a fully text description of good.

## Features

First of all, you should `log in` or `signup` to Catalog Application.
For the best user's experience, there is no need to verify email, phone number etc.
You can just enter a valid email address and choose a password.
User can't register *more than one* profile using one email address.

### Create, update, delete goods
Each authorized user can create, read, update or delete documents from `products` collection.
In order to create a new good, user should fill all 4 fields from creating form.

Easiest way to update some data - just click an `Edit` button and enter a new valid data.
Good's document will update instantly after commiting a `Save` button.

## How to use


1) Run "npm install" in the extracted project folder
2) Run "npm start" to start the React development server
3) Keep **2)** running and additionally run "npm run start:server" in a new terminal/ command prompt window (also in the project folder) to start the Node.js server.

`env` variables *should* contain a well-working URL for Mongo connection.