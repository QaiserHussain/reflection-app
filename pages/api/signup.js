import connect from '../../lib/connectdb'
import {UserSchema} from '../../models/signup'

connect()

export default async function handler(req, res) {
        const user = await UserSchema.create(req.body);
        if(!user){res.status(400).json({ message: 'no data' })}
        res.status(201).json(user)
  }
  