// services/AnimaisService.js

import { supabase } from './supabase.js'; // Importa a conexão Supabase

const TABELA = 'animais_clinica';

// --- Operações de CRUD ---

export async function buscarTodos() {
    const { data, error } = await supabase.from(TABELA).select('*');
    if (error) {
        // Logar o erro completo e lançar uma exceção genérica para o Controller
        console.error('Erro Supabase na busca:', error);
        throw new Error('Falha na busca de registros.');
    }
    return data;
}

export async function criarRegistro(payload) {
    const { data, error } = await supabase
        .from(TABELA)
        .insert([payload])
        .select();

    if (error) {
        console.error('Erro Supabase na criação:', error);
        throw new Error('Falha ao criar o registro.');
    }
    return data[0];
}

export async function atualizarRegistro(id, payload) {
    const { data, error } = await supabase
        .from(TABELA)
        .update(payload)
        .eq('id', id)
        .select();

    if (error) {
        console.error('Erro Supabase na atualização:', error);
        throw new Error('Falha ao atualizar o registro.');
    }
    return data;
}

export async function removerRegistro(id) {
    const { data, error } = await supabase
        .from(TABELA)
        .delete()
        .eq('id', id)
        .select();

    if (error) {
        console.error('Erro Supabase na remoção:', error);
        throw new Error('Falha ao remover o registro.');
    }
    return data;
}