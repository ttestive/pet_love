import { supabase } from '../services/supabase.js';

// GET ALL
export const getAllEvents = async (req, res) => {
    const { data, error } = await supabase.from('eventos').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
};

// CREATE
export const create = async (req, res) => {
    const { data, error } = await supabase
        .from('eventos')
        .insert([req.body])
        .select();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data[0]);
};

