# Potluck Planner API

Hosted Backend URL:

Endpoints with an (auth) require an authorization token like so:

Headers:
| Key | Value |
| :-- | :-- |
| Authorization | <AUTH_TOKEN> |

## Authentication

| Method | Endpoint       | Requirements             |                                  |
| ------ | -------------- | ------------------------ | -------------------------------- |
| POST   | /auth/register | name, username, password | Creates a new user object        |
| POST   | /auth/login    | username, password       | Logs in users who already exists |

## Users

| Method | Endpoint       | Requirements                            |                           |
| ------ | -------------- | --------------------------------------- | ------------------------- |
| GET    | /api/users     |                                         | Returns all users         |
| GET    | /api/users/:id |                                         | Returns user object by id |
| PUT    | /api/users/:id | either name, username, password, or all | Updates the user by id    |
| DELETE | /api/users/:id |                                         | Deletes the user by id    |

## Events

| Method | Endpoint               | Requirements                                            |                                                                 |
| ------ | ---------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| GET    | /api/events            |                                                         | Returns all events                                              |
| GET    | /api/events/users/:id  |                                                         | Returns all events related to user id, returns data of event id |
| GET    | /api/events/:id        |                                                         | Returns event by id                                             |
| GET    | /api/events/:id/food   |                                                         | Gets food for event id                                          |
| GET    | /api/events/:id/guests |                                                         | Gets all guests by event id                                     |
| POST   | /api/events            | title, location, month, day, year, start_time, end_time | Creates new event                                               |
| POST   | /api/events/:id/guests | userID (of the user being added)                        | Add guest to event by id                                        |
| PUT    | /api/events/:id        | title, location, month, day, year, start_time, end_time | Updates event by id                                             |
| DELETE | /api/events/:id        |                                                         | Deletes event by id                                             |

## Food

| Method | Endpoint             | Requirements                                                          |                                  |
| ------ | -------------------- | --------------------------------------------------------------------- | -------------------------------- |
| GET    | /api/food            |                                                                       | Returns all food items           |
| GET    | /api/events/:id/food |                                                                       | Returns all the food by event id |
| GET    | /api/food/:id        |                                                                       | Returns food object by id        |
| POST   | /api/food            | eventId, userID(optional), category, quantity, name (must be unique)  | Creates new food object          |
| PUT    | /api/food/:id        | eventId, userID(optional), category, quantity , name (must be unique) | Updates the food by id           |
| DELETE | /api/food/:id        |                                                                       | Deletes the food by id"          |
