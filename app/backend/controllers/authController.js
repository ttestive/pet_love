import { createUser, login } from '../services/authService.js'

export async function postUser(req, res) {
  try {
    const { name, password } = req.body

    if (!name || !password) {
      return res.status(400).json({ message: 'Parâmetro faltando: name e password são obrigatórios.' })
    }

    const newUser = await createUser(name, password)

    return res.status(201).json(newUser)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export async function postLogin(req, res) {
  try {
    const { name, password } = req.body

    if (!name || !password) {
      return res.status(400).json({ message: 'Parâmetro faltando: name e password são obrigatórios.' })
    }

    const user = await login(name, password)

    return res.status(200).json({
      message: 'Login realizado com sucesso',
      user
    })

  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}
