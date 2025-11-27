import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

// Rota POST http://localhost:3001/auth/login
router.post('/login', login);

export default router;

// ... suas importações atuais
import authRoutes from './routes/auth.routes.js'; // Importe a rota

// ... configurações do app

// Registre a rota. Pode usar '/auth' como prefixo
app.use('/auth', authRoutes); // Agora a rota final será /auth/login



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:3001/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Erro: ${response.status}`);
            }

            const data = await response.json();
            
            // 🟢 IMPORTANTE: Salvar o token para usar depois
            // Isso permite que você pegue esse token nas páginas de cadastro
            if (typeof window !== 'undefined') {
                localStorage.setItem('supabase.auth.token', data.token);
            }

            toast.success('Login realizado com sucesso!');
            router.push('/admin');

        } catch (error) {
            console.error(error);
            toast.error(error.message || 'Erro ao realizar login.');
        } finally {
            setLoading(false);
        }
    };