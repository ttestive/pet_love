// controllers/EventosController.js

// Importa o serviço de eventos
import * as EventosService from '../services/eventosService.js'; 
// Não precisa mais importar supabase diretamente!

// GET ALL
export const getAllEvents = async (req, res) => {
    try {
        const data = await EventosService.buscarTodosEventos();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Erro ao buscar eventos.' });
    }
};

// CREATE
export const create = async (req, res) => {
    try {
        const novoEvento = await EventosService.criarEvento(req.body);
        return res.status(201).json(novoEvento);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Erro ao criar evento.' });
    }
};


// UPDATE
export const update = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'ID inválido' });

    // Campos permitidos (MANTIDOS)
    const allowed = ['date', 'nome', 'horario', 'Descricao']; // Removido 'evento_id' da lista de atualização, pois deve ser imutável
    const payload = {};
    for (const key of allowed) {
        if (req.body[key] !== undefined) payload[key] = req.body[key];
    }
    if (Object.keys(payload).length === 0)
        return res.status(400).json({ error: 'Nenhum campo válido enviado' });
        
    try {
        // CHAMA O SERVIÇO CORRETO: EventosService.atualizarEvento
        const data = await EventosService.atualizarEvento(id, payload); 

        if (!data?.length) return res.status(404).json({ error: 'Registro não encontrado' });
        return res.json(data[0]);

    } catch (error) {
        return res.status(500).json({ error: error.message || 'Erro ao atualizar o registro.' });
    }
};

// DELETE
export const remove = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'ID inválido' });

    try {
        // CHAMA O SERVIÇO CORRETO: EventosService.removerEvento
        const data = await EventosService.removerEvento(id);

        if (!data?.length) return res.status(404).json({ error: 'Registro não encontrado' });
        return res.json(data[0]);

    } catch (error) {
        return res.status(500).json({ error: error.message || 'Erro ao remover o registro.' });
    }
};