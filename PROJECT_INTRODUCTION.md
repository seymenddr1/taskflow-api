# TaskFlow API — Project Introduction

## 1. Project Overview

TaskFlow is a RESTful API developed using Node.js and Express.js. Its purpose is to provide a simple backend system for managing tasks within a software development team.

The project demonstrates fundamental backend development concepts, including REST API design, routing, CRUD operations, JSON data handling, and middleware.

## 2. Project Scenario

A software development company needs a system to organize and track tasks assigned to its employees.

TaskFlow allows tasks to be created, assigned to team members, updated, viewed, and deleted. Each task includes a status and priority level to help organize the team's responsibilities.

## 3. Main Features

- **Task Creation:** Create tasks with a title, description, assignee, status, and priority.
- **Task Listing:** Retrieve all existing tasks.
- **Task Details:** Retrieve a specific task using its unique ID.
- **Task Updates:** Modify task information, including status and priority.
- **Task Deletion:** Remove tasks from the system.
- **Request Logging:** Record incoming HTTP requests with timestamps, HTTP methods, and endpoints.

## 4. Task Data Model

Each task contains six properties:

| Property | Description |
|---|---|
| id | Unique task identifier |
| title | Name of the task |
| description | Detailed task information |
| assignee | Employee responsible for the task |
| status | Current task status |
| priority | Task priority level |

## 5. API Design

The system follows REST API principles and supports five main endpoints:

| HTTP Method | Endpoint | Operation |
|---|---|---|
| POST | /tasks | Create a task |
| GET | /tasks | List all tasks |
| GET | /tasks/:id | Retrieve a specific task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## 6. Technologies and Architecture

The project uses JavaScript, Node.js, and Express.js for backend development. Postman is used to test the API endpoints.

Task information is stored in an in-memory JavaScript array. The system generates unique task IDs during execution, and data is reset when the server restarts.

TaskFlow is designed as a beginner-friendly backend application that demonstrates essential REST API development skills.