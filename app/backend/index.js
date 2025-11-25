// index.js (Versão corrigida e completa)

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
// Importa o arquivo de rotas que você definiu
import eventosRoutes from './routes/eventosClinica.routes.js'; 

// Carrega variáveis de ambiente (necessário no arquivo principal também)
dotenv.config({ path: path.resolve(process.cwd(), 'dev.env') }); 
import animaisClinicaRoutes from './routes/animaisClinica.routes.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Montar rotas
// Exemplo: Todas as rotas no eventosRoutes serão acessadas via /eventos
app.use('/eventos', eventosRoutes); 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`Rotas de Eventos em: http://localhost:${port}/eventos`);
});