# Potluck Planner API

Hosted Backend URL: https://potluck-planner1.herokuapp.com/

Endpoints that require an authorization token:

Headers:
| Key | Value |
| :-- | :-- |
| Authorization | AUTH_TOKEN |

## Authentication

| Method | Endpoint       | Requirements             |                    |
| ------ | -------------- | ------------------------ | ------------------ |
| POST   | /auth/register | name, username, password | Creates a new user |
| POST   | /auth/login    | username, password       | Logs in users      |

## Users

| Method | Endpoint            | Requirements          |                                     |
| ------ | ------------------- | --------------------- | ----------------------------------- |
| GET    | /api/users          |                       | Returns all users                   |
| GET    | /api/users/:id      |                       | Returns user object by id           |
| DELETE | /api/users/:id      |                       | Deletes the user by id              |
| GET    | /api/users/:id/rsvp |                       | see if user is a "rsvp person"      |
| PUT | /api/users/:id/rsvp | change rsvp to 1 or 0 | updates the user to a "rsvp person" |


## Events

| Method | Endpoint                        | Requirements                                            |                                                                 |
| ------ | ------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| GET    | /api/events                     |                                                         | Returns all events                                              |
| GET    | /api/events/users/:id           |                                                         | Returns all events related to user id, returns data of event id |
| GET    | /api/events/:id                 |                                                         | Returns event by id                                             |
| GET    | /api/events/:id/food            |                                                         | Gets food for event id                                          |
| GET    | /api/events/:id/guests          |                                                         | Gets all guests by event id                                     |
| POST   | /api/events                     | title, location, month, day, year, start_time, end_time | Creates new event                                               |
| POST   | /api/events/:id/guests          | userID (of the user being added)                        | Add guest to event by id                                        |
| PUT    | /api/events/:id                 | title, location, month, day, year, start_time, end_time | Updates event by id                                             |
| DELETE | /api/events/:id                 |                                                         | Deletes event by id                                             |
| DELETE | /api/events/:id/guests/:user_id |                                                         | Deletes guest from event by event id                            |

## Food

| Method | Endpoint             | Requirements                                                                              |                                  |
| ------ | -------------------- | ----------------------------------------------------------------------------------------- | -------------------------------- |
| GET    | /api/food            |                                                                                           | Returns all food items           |
| GET    | /api/events/:id/food |                                                                                           | Returns all the food by event id |
| GET    | /api/food/:id        |                                                                                           | Returns food object by id        |
| POST   | /api/food            | eventId, userID(of person bringing, optional), category, quantity, name (must be unique)  | Creates new food object          |
| PUT    | /api/food/:id        | eventId, userID(of person bringing, optional), category, quantity , name (must be unique) | Updates the food by id           |
| DELETE | /api/food/:id        |                                                                                           | Deletes the food by id"          |
