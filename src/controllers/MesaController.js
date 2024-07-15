import {createMesa} from '../models/Mesa.js';

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