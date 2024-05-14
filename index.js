import express from 'express'
import { verifyToken } from './auth/authMiddleware.js'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

const users = [
  { username: 'juan', password: 'juancontraseña' },
  { username: 'armando', password: 'armandocontraseña' }
];
app.post('/login', (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username && u.password === password)
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas' })
  }
  const token = jwt.sign({ username }, 'secretKey', { expiresIn: '30m' })
  res.json({ token })
})
app.get('/verify', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Token válido' })
})
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000')
})