// controllers/AnimaisController.js

import * as AnimaisService from '../services/animaisServices.js'; // Importa o Serviço

// GET ALL
export const getAll = async (req, res) => {
    try {
        const data = await AnimaisService.buscarTodos();
        return res.json(data);
    } catch (error) {
        // Erro genérico capturado do Serviço
        return res.status(500).json({ error: error.message || 'Erro interno do servidor.' });
    }
};

// CREATE
export const create = async (req, res) => {
    try {
        const novoRegistro = await AnimaisService.criarRegistro(req.body);
        return res.status(201).json(novoRegistro);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Erro ao criar o registro.' });
    }
};

// UPDATE
export const update = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'ID inválido' });

    // Lógica de sanitização e validação de payload (MANTIDA NO CONTROLLER)
    const allowed = ['entrance','type','size','sick','hurted','adopted','race','nome','exit_date','color'];
    const payload = {};
    for (const key of allowed) {
        if (req.body[key] !== undefined) payload[key] = req.body[key];
    }
    if (Object.keys(payload).length === 0)
        return res.status(400).json({ error: 'Nenhum campo válido enviado' });
        
    try {
        const data = await AnimaisService.atualizarRegistro(id, payload);

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
        const data = await AnimaisService.removerRegistro(id);

        if (!data?.length) return res.status(404).json({ error: 'Registro não encontrado' });
        return res.json(data[0]);

    } catch (error) {
        return res.status(500).json({ error: error.message || 'Erro ao remover o registro.' });
    }
};

// ... Repita o processo para o EventsController, importando o EventsService ...