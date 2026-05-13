import { Router } from 'express';
import { prisma } from '../libs/prisma'
import { createUser, createUsers, getAllUsers } from '../services/user';


export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
     const user = await createUser( {
       name:'Wildd bill',
       email:'Wildd.bill@gmail.com',
       posts: {
        create: {
          title:'Post 1 - Wild Bill',
          content: 'Content of post 1 - Wild Bill'
        }
       }
     });
     if (user) {
      res.status(201).json({ user })
     } else {
      res.status(400)
     }

     res.json(user) 
})

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([
      {name: 'joão silva', email: 'joão@example.com'},
      {name: 'joão sil', email: 'joão1@example.com'},
      {name: 'joão silv', email: 'joão2@example.com'},
      {name: 'joão si', email: 'joão3@example.com'},
      {name: 'joão s', email: 'joão4@example.com'},

    ])
  if (result) {
   res.status(201).json({ ok:true })
  }else {
     res.status(400).json({ error: 'Error creating users' })
  }
})

mainRouter.get('/users', async (req,res) => {
  const users = await getAllUsers()
  if (users) {
    res.json({ users })
  } else {
    res.status(500).json({ error: 'Error fetching users' })
  }

})