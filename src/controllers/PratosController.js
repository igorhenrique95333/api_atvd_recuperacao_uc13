import { createPrato, findAllPratos } from "../models/Pratos.js";

export const encontrarPratos = async (req, res) => {
    try {
      const pratos = await findAllPratos();
      res.status(200).json({ pratos });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get funcionarios", message: error.message });
    }
  };

  export const create = async (req, res) => {
    try {
        let dado = req.body;
        const data = {
          pratoName: dado.pratoName,
          pratoValor: dado.pratoValor,
          pratoDesc: dado.pratoDesc,
          pratoClass: dado.pratoClass
        };
        const info = await createPrato(data);
        return res.status(201).json({ info });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Failed to create Mesa", message: error.message });
    }
};