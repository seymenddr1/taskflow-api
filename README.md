# TaskFlow API

A REST API for managing tasks, built with Node.js and Express.js.

## Features

- Create new tasks
- View all tasks
- View a specific task
- Update existing tasks
- Delete tasks
- Log incoming API requests

## Technologies

- Node.js
- Express.js
- JavaScript
- Postman (API testing)

## Installation and Setup

1. Download or clone this repository.
2. Open the project folder in your terminal.
3. Install the dependencies:

   npm install

4. Start the server:

   node index.js

5. The API will be available at:

   http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get a task by ID |
| POST | /tasks | Create a new task |
| PUT | /tasks/:id | Update an existing task |
| DELETE | /tasks/:id | Delete a task |

## Data Storage

Tasks are stored in an in-memory JavaScript array.
Data resets when the server is restarted.
