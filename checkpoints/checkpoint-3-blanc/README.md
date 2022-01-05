# WORKSHOP BOOKS EXPRESS _ MYSQL _ UNITTEST

## :one: Step[1] - Create project

Please get the project to start
- git clone
- npm install
- launch your mysql terminal and copy/paste the /sql/books.sql or import it

## :two: Step[2] - NodeJS / Express

In order to launch the back end server, you should add the package corresponding to your db
then, add a correct db-config.js
and prepare your .env file correctly

You can launch your project with npm run dev (Eslint is ready)

### Rules

- :white_check_mark: Response bodies should be JSON.
- :white_check_mark: Request bodies should be JSON.
- :white_check_mark: `PUT` and `DELETE` request should return `204 no content`.
- :white_check_mark: `POST` request should return `201 created` with the associated created resource.
- :white_check_mark: All error should return a `404 Not Found`

### Tests

This workshop comes with integration tests on most of the routes.

![](https://media.giphy.com/media/sECT307ocX509Gh9bI/giphy.gif)

- GET `/api/books`
- GET `/api/books/1`
- POST `/api/books`
- PUT `/api/books`
- DELETE `/api/books`
---

### Project architecture

This checkpoint comes with an already created architecture.

```sh
src
├── api
│   ├── index.js
│   ├── books
│   │   ├── books.routes.js
│   │   ├── getAll.js
│   │   └── ...
├── app.js
├── index.js
└── middlewares.js
```
---

### Your mission

All you have to do, is writing your own logic in each route files in each route file (`getAll`, `getOne`, `post`, `update`, `delete`).
Here are some user stories about what you need to do:

- As a user, I need to be able to retrieve the full list of books
- As a user, I need to be able to retrieve one tbook by its ID
- As a user, I need to be able to create a new book
- As a user, I need to be able to update a book
- As a user, I need to be able to delete a book

### How to proceed

First, go to the /test/book.test.js and comment every blocks beginning with it('should....);
You will uncomment them one by one after finishing and testing your route with postman

Then start with the getAll route...(/api/books/getAll.js)
Prepare the db.connection and promise and in the function write your query, send your response if success with the correct status and the catch(err) as well

Then test it with postman until it works...
Then uncomment the test for the getAll route and test it (npm test)...if valid, you should see (Tests: 1 passed, 1 total) or an error (Watch carrefully this one to debug your code)

When all is correct, prepare the second route and so on..


