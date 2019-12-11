require('dotenv').config(); 
const express = require('express'),
      ctrl = require('./controller'),
      massive = require('massive'),
      session = require('express-session'), 
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express(); 

      app.use(express.json());
      app.use(session({
          resave: false,
          saveUninitialized: true,
          cookie: {maxAge: 1000 * 60 * 60},
          secret: SESSION_SECRET

      }))

      massive(CONNECTION_STRING).then(db => {
          app.set('db', db)
          console.log('DaBo connected')
      })
      

      //auth
      app.post('/api/auth/login', ctrl.login);
      app.post('/api/auth/register', ctrl.register); 
      app.post('/api/logout', ctrl.logout);
      

    

      
      app.listen(SERVER_PORT, () => console.log(`Witty comment located around port ${SERVER_PORT}`));