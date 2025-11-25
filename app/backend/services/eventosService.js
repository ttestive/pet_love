// services/EventosService.js 

import { supabase } from './supabase.js'; 

const TABELA = 'eventos';

export async function buscarTodosEventos() { // Nome da função mais descritivo
    const { data, error } = await supabase.from(TABELA).select('*');
    if (error) {
        console.error('Erro Supabase na busca de Eventos:', error);
        throw new Error('Falha na busca de registros de eventos.');
    }
    return data;
}

export async function criarEvento(payload) { // Nome da função mais descritivo
    const { data, error } = await supabase
        .from(TABELA)
        .insert([payload])
        .select();

    if (error) {
        console.error('Erro Supabase na criação de Evento:', error);
        throw new Error('Falha ao criar o evento.');
    }
    return data[0];
}

export async function atualizarEvento(id, payload) { // Nome da função mais descritivo
    const { data, error } = await supabase
        .from(TABELA)
        .update(payload)
        .eq('id', id)
        .select();

    if (error) {
        console.error('Erro Supabase na atualização de Evento:', error);
        throw new Error('Falha ao atualizar o evento.');
    }
    // Retorna 'data' (que é um array) para o controller verificar o length
    return data;
}

export async function removerEvento(id) { // Nome da função mais descritivo
    const { data, error } = await supabase
        .from(TABELA)
        .delete()
        .eq('id', id)
        .select();

    if (error) {
        console.error('Erro Supabase na remoção de Evento:', error);
        throw new Error('Falha ao remover o evento.');
    }
    // Retorna 'data' (que é um array) para o controller verificar o length
    return data;
}