import { findMesaById } from "../models/Mesa.js";
import { createDiponibilidade } from "../models/Disponibilidade.js";

export const create = async (req, res) => {
    try {
        let { mesaId, hora_inicio, date, hora_fim } = req.body;
        const mesa = await findMesaById(parseInt(mesaId));
        const data = {
            mesaId: mesa.id,
            DateDisponivel:date,
            hora_inicio: hora_inicio,
            hora_fim: hora_fim,
        };
        const info = await createDiponibilidade(data);
        return res.status(201).json({ info });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Failed to create Diponibilidade", message: error.message });
    }
};
