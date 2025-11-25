import { supabase } from '../services/supabase.js';

// GET ALL
export const getAll = async (req, res) => {
    const { data, error } = await supabase.from('animais_clinica').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
};

// CREATE
export const create = async (req, res) => {
    console.log("📩 BODY RECEBIDO:", req.body);

    const { data, error } = await supabase
        .from('animais_clinica')
        .insert([req.body])
        .select();

    //if (error) return res.status(500).json({ error: error.message });
    if (error) {
        console.error("❌ ERRO SUPABASE:", error);
        return res.status(500).json({ error: error.message });
    }
    return res.status(201).json(data[0]);
};

// UPDATE
export const update = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'ID inválido' });

    const allowed = ['entrance','type','size','sick','hurted','adopted','race','nome','exit_date','color'];
    const payload = {};

    for (const key of allowed) {
        if (req.body[key] !== undefined) payload[key] = req.body[key];
    }

    if (Object.keys(payload).length === 0)
        return res.status(400).json({ error: 'Nenhum campo válido enviado' });

    const { data, error } = await supabase
        .from('animais_clinica')
        .update(payload)
        .eq('id', id)
        .select();

    if (error) return res.status(500).json({ error: error.message });
    if (!data?.length) return res.status(404).json({ error: 'Registro não encontrado' });

    return res.json(data[0]);
};

// DELETE
export const remove = async (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'ID inválido' });

    const { data, error } = await supabase
        .from('animais_clinica')
        .delete()
        .eq('id', id)
        .select();

    if (error) return res.status(500).json({ error: error.message });
    if (!data?.length) return res.status(404).json({ error: 'Registro não encontrado' });

    return res.json(data[0]);
};