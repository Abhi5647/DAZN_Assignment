# Express Movie API

![Screenshot 2024-03-09 162245](https://github.com/Abhi5647/DAZN_Assignment/assets/109646207/6e42e24c-a914-4354-8817-cfe2ce675256)

![Screenshot 2024-03-09 163300](https://github.com/Abhi5647/DAZN_Assignment/assets/109646207/d6d4bfdd-cb9b-4b95-8e31-be6c4176bcc5)

This is a simple Express API for managing movies. It includes CRUD (Create, Read, Update, Delete) operations for movies and implements an authentication middleware to restrict access to certain routes.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/express-movie-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd express-movie-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

### Start the Server

To start the server, run:

```bash
npm start
```

The server will start listening on port 3000 by default. You can change the port by setting the `PORT` environment variable.

### Endpoints

- **GET /movies**: Returns a list of all movies.
  
- **GET /movies/:id**: Returns the details of a specific movie identified by `id`.
  
- **POST /movies**: Creates a new movie. Requires admin privileges.
  
- **PUT /movies/:id**: Updates the details of a specific movie identified by `id`. Requires admin privileges.
  
- **DELETE /movies/:id**: Deletes a specific movie identified by `id`. Requires admin privileges.

### Authentication

To access routes that require admin privileges, include the `admin: true` header in your requests.

## Testing

To run tests, use the following command:

```bash
npm test
```

This will execute the test suite using Jest.

## Technologies Used

- Express.js
- TypeScript
- Jest
- Supertest

