import * as AuthService from '../services/authService.js';

export const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    try {
        // Chama o serviço de login
        const sessionData = await AuthService.loginUsuario(email, senha);
        
        // Retorna o token para o front-end
        return res.status(200).json({
            message: 'Login realizado com sucesso',
            token: sessionData.token,
            user: {
                id: sessionData.user.id,
                email: sessionData.user.email
            }
        });

    } catch (error) {
        return res.status(401).json({ error: 'Email ou senha inválidos.' });
    }
};