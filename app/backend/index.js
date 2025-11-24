import express from 'express';
import cors from 'cors';
import animaisClinicaRoutes from './routes/animaisClinica.routes.js';





const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Montar rotas
app.use('/animais_clinica', animaisClinicaRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});