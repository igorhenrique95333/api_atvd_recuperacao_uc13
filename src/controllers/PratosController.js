import { createPrato, findAllPratos, findPratosbyClass, updatePrato, DelPrato} from "../models/Pratos.js";

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

export const encontrarPratosByClass = async (req, res) => {
  try {
    const classe = req.params.class;
    const pratos = await findPratosbyClass(classe);
    res.status(200).json({ pratos });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get funcionarios", message: error.message });
  }
};

export const updatePratos = async (req, res) => {
  try {
    const id = req.params.id;
    const PratoData = req.body;
    const info = await updatePrato(id, PratoData);
    res.status(200).json({ info });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update disponibilidade", message: error.message });
  }
};

export const DeletePrato = async (req, res) => {
  try {
    let id = req.body.id;
    const info = await DelPrato(id);
    res.status(200).json({ info });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get user", message: error.message });
  }
};