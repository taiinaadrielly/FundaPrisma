import { Router } from 'express';
import { prisma } from '../libs/prisma'
import { createUser, createUsers } from '../services/user';


export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
     const user = await createUser( {
       name:'Tainá Adrielly',
       email:'tainaadrielly1@gmail.com' 
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