import { findMesaById } from "../models/Mesa.js";
import { createDiponibilidade, updateDisp } from "../models/Disponibilidade.js";

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

export const update = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id)
      const DispData = req.body;
      const info = await updateDisp(id, DispData);
      res.status(200).json({ info });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update disponibilidade", message: error.message });
    }
  };