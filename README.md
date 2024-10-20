# simple-sql-rest-api-ts

## Available Scripts
### `npm start`
Runs the app in the development mode.
### `npm run build`
Builds the app for production to the `dist` folder.
### `npm run prod`
Runs the app for production in the `dist` folder.

## Architecture
### Architecture
![Architecture](https://camo.githubusercontent.com/c17d4dfaab39cf7223f7775c9e973bb936e4169e8bd0011659e83cec755c8f26/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a42526b437272622d5f417637395167737142556b48672e706e67)

### Architecture with standard features: config, health check, logging, middleware log tracing, data validation
![Architecture with standard features: config, health check, logging, middleware log tracing, data validation](https://camo.githubusercontent.com/fa1158e7f94bf96e09aef42fcead23366839baf71190133d5df10f3006b2e041/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a6d494e3344556569365676316c755a376747727655412e706e67)

### Search users: Support both GET and POST 
#### POST /users/search
##### *Request:* POST /users/search
In the below sample, search users with these criteria:
- get users of page "1", with page size "20"
- email="tony": get users with email starting with "tony"
- dateOfBirth between "min" and "max" (between 1953-11-16 and 1976-11-16)
- sort by phone ascending, id descending
```json
{
    "page": 1,
    "limit": 20,
    "sort": "phone,-id",
    "email": "tony",
    "dateOfBirth": {
        "min": "1953-11-16T00:00:00+07:00",
        "max": "1976-11-16T00:00:00+07:00"
    }
}
```
##### GET /users/search?page=1&limit=2&email=tony&dateOfBirth.min=1953-11-16T00:00:00+07:00&dateOfBirth.max=1976-11-16T00:00:00+07:00&sort=phone,-id
In this sample, search users with these criteria:
- get users of page "1", with page size "20"
- email="tony": get users with email starting with "tony"
- dateOfBirth between "min" and "max" (between 1953-11-16 and 1976-11-16)
- sort by phone ascending, id descending

#### *Response:*
- total: total of users, which is used to calculate numbers of pages at client 
- list: list of users
```json
{
    "list": [
        {
            "id": "ironman",
            "username": "tony.stark",
            "email": "tony.stark@gmail.com",
            "phone": "0987654321",
            "dateOfBirth": "1963-03-24T17:00:00Z"
        }
    ],
    "total": 1
}
```

## API Design
### Common HTTP methods
- GET: retrieve a representation of the resource
- POST: create a new resource
- PUT: update the resource
- PATCH: perform a partial update of a resource, refer to [service](https://github.com/core-go/service) and [mongo](https://github.com/core-go/mongo)  
- DELETE: delete a resource

## API design for health check
To check if the service is available.
#### *Request:* GET /health
#### *Response:*
```json
{
    "status": "UP",
    "details": {
        "mongo": {
            "status": "UP"
        }
    }
}
```

## API design for users
#### *Resource:* users

### Get all users
#### *Request:* GET /users
#### *Response:*
```json
[
    {
        "id": "spiderman",
        "username": "peter.parker",
        "email": "peter.parker@gmail.com",
        "phone": "0987654321",
        "dateOfBirth": "1962-08-25T16:59:59.999Z"
    },
    {
        "id": "wolverine",
        "username": "james.howlett",
        "email": "james.howlett@gmail.com",
        "phone": "0987654321",
        "dateOfBirth": "1974-11-16T16:59:59.999Z"
    }
]
```

### Get one user by id
#### *Request:* GET /users/:id
```shell
GET /users/wolverine
```
#### *Response:*
```json
{
    "id": "wolverine",
    "username": "james.howlett",
    "email": "james.howlett@gmail.com",
    "phone": "0987654321",
    "dateOfBirth": "1974-11-16T16:59:59.999Z"
}
```

### Create a new user
#### *Request:* POST /users 
```json
{
    "id": "wolverine",
    "username": "james.howlett",
    "email": "james.howlett@gmail.com",
    "phone": "0987654321",
    "dateOfBirth": "1974-11-16T16:59:59.999Z"
}
```
#### *Response:*
- status: configurable; 1: success, 0: duplicate key, 4: error
```json
{
    "status": 1,
    "value": {
        "id": "wolverine",
        "username": "james.howlett",
        "email": "james.howlett@gmail.com",
        "phone": "0987654321",
        "dateOfBirth": "1974-11-16T00:00:00+07:00"
    }
}
```
#### *Fail case sample:* 
- Request:
```json
{
    "id": "wolverine",
    "username": "james.howlett",
    "email": "james.howlett",
    "phone": "0987654321a",
    "dateOfBirth": "1974-11-16T16:59:59.999Z"
}
```
- Response: in this below sample, email and phone are not valid
```json
{
    "status": 4,
    "errors": [
        {
            "field": "email",
            "code": "email"
        },
        {
            "field": "phone",
            "code": "phone"
        }
    ]
}
```

### Update one user by id
#### *Request:* PUT /users/:id
```shell
PUT /users/wolverine
```
```json
{
    "username": "james.howlett",
    "email": "james.howlett@gmail.com",
    "phone": "0987654321",
    "dateOfBirth": "1974-11-16T16:59:59.999Z"
}
```
#### *Response:*
- status: configurable; 1: success, 0: duplicate key, 2: version error, 4: error
```json
{
    "status": 1,
    "value": {
        "id": "wolverine",
        "username": "james.howlett",
        "email": "james.howlett@gmail.com",
        "phone": "0987654321",
        "dateOfBirth": "1974-11-16T00:00:00+07:00"
    }
}
```

### Patch one user by id
Perform a partial update of user. For example, if you want to update 2 fields: email and phone, you can send the request body of below.
#### *Request:* PATCH /users/:id
```shell
PATCH /users/wolverine
```
```json
{
    "email": "james.howlett@gmail.com",
    "phone": "0987654321"
}
```
#### *Response:*
- status: configurable; 1: success, 0: duplicate key, 2: version error, 4: error
```json
{
    "status": 1,
    "value": {
        "email": "james.howlett@gmail.com",
        "phone": "0987654321"
    }
}
```

### Delete a new user by id
#### *Request:* DELETE /users/:id
```shell
DELETE /users/wolverine
```
#### *Response:* 1: success, 0: not found, -1: error
```json
1
```

### health check
To check if the service is available
#### *Request:* GET /health
#### *Response:*
```json
{
    "status": "UP",
    "details": {
        "sql": {
            "status": "UP"
        }
    }
}
```