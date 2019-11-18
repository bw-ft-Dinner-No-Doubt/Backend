## CURRENT PROBLEMS

//PUT /api/diner/:id
when user is updated(put), token can break

## TO-DO

** Finish mock data and seed db3

** Deply Branch to Heroku

** Consider 
- creating a Role for 'admin'
- give admin more access?
- newly created Diner will default to 'user'

** hashing
- should returned information about diner from get request return hashed info?

** create .spec files start testing
- server
- auth router
- table sub routers
- 2 tests per endpoint right now would be about 52 tests?

** create logout that destroys token (React 2 will rerout to login form)
