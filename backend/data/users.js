import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Rishabh Dubey',
    email: 'rish@1711@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
