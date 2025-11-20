// server.js (Adaptado para Supabase)

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
// 1. Substituição: Usamos o SDK do Supabase
import { createClient } from '@supabase/supabase-js'; 
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), 'dev.env') });
const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); 
app.use(express.json());


const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY; 


if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    throw new Error('As variáveis de ambiente SUPABASE_URL ou SUPABASE_SERVICE_KEY não estão configuradas.');
}

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_SERVICE_KEY,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    }
);


// @erick aqui eh a rota para testar a conexão/busca de dados:
app.get('/animais', async (req, res) => {
    try {
        console.log('Iniciando consulta Supabase...');
        const { data, error } = await supabase
            .from('animais')
            .select('*');

        console.log('Response Supabase:', { data, error });

        if (error) {
            console.error('Erro no Supabase:', error);
            return res.status(500).json({ error: error.message });
        }
        
        res.json(data);
    } catch (e) {
        console.error('Erro interno:', e.message);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

// --- INICIALIZAÇÃO DO SERVIDOR ---
app.listen(port, () => {



});    console.log(`Servidor rodando na porta ${port}`);app.listen(port, () => {
    console.log(`server rodando na porta ${port}`);
    console.log(`conn supabase inicializada.`);
});