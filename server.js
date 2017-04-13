'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //req.body
const cors = require('cors'); //allow req from external api's/domains :8080

let contacts = require('./data');

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// view contacts
app.get('/api/contacts', (req, res)=>{
  // res.send('Hello, World!');
  if(!contacts){
    res.status(404).send({message: 'No contacts found.'});
  }
res.json(contacts);
});

// view single contact
app.get('/api/contacts/:id', (req,res)=> {
  const requestId = req.params.id;

  let contact = contacts.filter(contact => {
    return contact.id == requestId;
  });
  if(!contact){
    res.status(404).send({message: 'No contact found.'});
  }
res.json(contact[0]);
});

// add new contact
app.post('/api/contacts/', (req,res)=> {
    const contact = {
      id: contacts.length + 1,
      first_name: req.body.first_name,
      email: req.body.email
  }
contacts.push(contact);

res.json(contact)
});

//edit single contact






//http Verbs : GET(view), POST(add), PUT(edit), DELETE(remove), PATCH.  "Methods used to send requests to server".


// server config
const hostname = 'localhost';
const port = 5555;

app.listen(port,hostname, ()=>{
  console.log(`Its time to start running....at http://${hostname}:${port}`);
});
