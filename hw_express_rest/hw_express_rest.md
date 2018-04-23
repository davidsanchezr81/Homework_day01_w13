# Express Homework

Take a look through the start code, there are dummy data models provided instead of a database.

Using the films data model to access the data, create the appropriate routes to serve this data from our RESTful express API.

- Show all films with an index route (GET `/films`)
- Get film by ID / index (GET `/films/:id`)
- Add a new film with a create route (POST `/films`) **You will need `body-parser` to access the body of the incoming requests**
- Update an existing film with an update route (UPDATE `/films/:id`);
- Delete a film using it's ID / index (DELETE `/films:id`)

You'll need to use Insomnia to test your CREATE, UPDATE and DELETE routes. You can test GET routes with your browser's address bar.

## Extension

Set up another controller for a Books API. You can access some data for this using the BooksData class.

**Remember to use the `npm run server:dev` script to use `nodemon` to automatically restart the server to apply your changes as you save your files.**
