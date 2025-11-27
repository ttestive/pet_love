import { supabase } from './supabase.js';

export async function loginUsuario(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        throw new Error(error.message);
    }

    return {
        user: data.user,
        token: data.session.access_token
    };
}