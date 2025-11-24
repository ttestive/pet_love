"use client";

import { useState } from 'react';
import axios from 'axios';

export default function FormularioPage() {
    const [formData, setFormData] = useState({
        entrance: "",
        type: "",
        size: "",
        sick: "",
        hurted: "",
        adopted: "",
        race: "",
        nome: "",
        exit_date: "",
        color: ""
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await axios.post("http://localhost:3001/animais_clinica", formData);
            setResponseMessage("Registro inserido com sucesso!");
            console.log("Resposta:", response.data);
        } catch (error) {
            console.error("Erro ao enviar:", error);
            setResponseMessage("Erro ao cadastrar.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
            <h1>Cadastro de Animais</h1>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                
                <input name="entrance" placeholder="Entrada" value={formData.entrance} onChange={handleChange} />
                <input name="type" placeholder="Tipo" value={formData.type} onChange={handleChange} />
                <input name="size" placeholder="Tamanho" value={formData.size} onChange={handleChange} />
                <input name="sick" placeholder="Doença" value={formData.sick} onChange={handleChange} />
                <input name="hurted" placeholder="Ferido" value={formData.hurted} onChange={handleChange} />
                <input name="adopted" placeholder="Adotado" value={formData.adopted} onChange={handleChange} />
                <input name="race" placeholder="Raça" value={formData.race} onChange={handleChange} />
                <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} />
                <input name="exit_date" placeholder="Data de Saída" value={formData.exit_date} onChange={handleChange} />
                <input name="color" placeholder="Cor" value={formData.color} onChange={handleChange} />

                <button type="submit" disabled={loading}>
                    {loading ? "Enviando..." : "Cadastrar"}
                </button>
            </form>

            {responseMessage && <p style={{ marginTop: "10px" }}>{responseMessage}</p>}
        </div>
    );
}
