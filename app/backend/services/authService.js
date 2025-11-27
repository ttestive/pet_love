import { supabase } from './supabase.js'

// =====================================================
// 📌 Criar usuário (tabela: roles)
// =====================================================
export async function createUser(name, password) {
    try {
        // 1️⃣ Verificar se já existe um usuário com esse name
        const { data: existingUser, error: findError } = await supabase
            .from('roles')
            .select('*')
            .eq('name', name)
            .maybeSingle()

        if (findError) throw findError
        if (existingUser) throw new Error("Usuário já cadastrado")

        // 2️⃣ Inserir novo usuário (SEM CRIPTOGRAFIA)
        const { data: userCreated, error: insertError } = await supabase
            .from('roles')
            .insert({
                name,
                password   // salvo como texto puro
            })
            .select()
            .single()

        if (insertError) throw insertError

        return userCreated

    } catch (error) {
        console.error("Erro ao criar usuário:", error.message)
        throw error
    }
}

// =====================================================
// 📌 Login (tabela: roles)
// =====================================================
export async function login(name, password) {
    try {
        if (!name || !password) {
            throw new Error("Nome e senha são obrigatórios")
        }

        // 1️⃣ Buscar usuário
        const { data: user, error: findError } = await supabase
            .from('roles')
            .select('*')
            .eq('name', name)
            .single()

        if (findError || !user) {
            throw new Error("Usuário não encontrado")
        }

        // 2️⃣ Comparar senha manualmente
        if (user.password !== password) {
            throw new Error("Senha incorreta")
        }

        // 3️⃣ Retornar usuário sem senha
        const { password: _, ...userSemSenha } = user
        return userSemSenha

    } catch (error) {
        console.error("Erro no login:", error.message)
        throw error
    }
}
