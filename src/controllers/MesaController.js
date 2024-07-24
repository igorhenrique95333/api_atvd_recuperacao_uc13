import {createMesa} from '../models/Mesa.js';
import {findMesaById} from '../models/Mesa.js'
import {DelMesa} from  '../models/Mesa.js';
import {updateMesa} from '../models/Mesa.js';

export const create = async (req, res) => {
    try {
        let dado = req.body.mesaCapact;
        const data = {
            mesaCapact: parseInt(dado)
        };
        const info = await createMesa(data);
        return res.status(201).json({ info });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Failed to create Mesa", message: error.message });
    }
};

export const encontrarMesaId = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      const mesa = await findMesaById(id);
      res.status(200).json({ mesa });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get mesa", message: error.message });
    }
  };

  export const DeleteMesa = async (req, res) => {
    try {
      let id = req.body.id;
      const info = await DelMesa(id);
      res.status(200).json({ info });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to delete mesa", message: error.message });
    }
  };

  export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const MesaData = req.body;
      const info = await updateMesa(id, MesaData);
      res.status(200).json({ info });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update mesa", message: error.message });
    }
  };