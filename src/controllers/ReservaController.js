  import {createReserva, findResByIdUserDateTime, findResByDateTime, DelReserva, updateRes} from "../models/Reserva.js"
  import { findUserByEmail } from "../models/User.js";
  import {findMesaById} from "../models/Mesa.js"
  import {findAllMesas} from "../models/Mesa.js"
  import { findAllDisponibildade, findDispByIdMesaDateTime, findDisponiblidadeByIdMesa } from "../models/Disponibilidade.js";
  import {findMesaByDate} from "../models/Mesa.js";
  import { DelDisponibilidade } from "../models/Disponibilidade.js";

  export const encontrarDisp= async (req, res) => {
    try {
      console.log("disp")
      const disponibilidade = await findAllDisponibildade();
      res.status(200).json({ disponibilidade });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get disponiblidade", message: error.message });
    }
  };

  export const encontrarMesa = async (req, res) => {
    try {
      const mesa = await findAllMesas();
      res.status(200).json({ mesa });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get mesas", message: error.message });
    }
  }; 
  export const encontrarDisponiblidade = async (req, res) => {
    try {
      let mesaId = parseInt(req.params.mesaId);
      const Disponibilidade = await findDisponiblidadeByIdMesa(mesaId);
      res.status(200).json({ Disponibilidade });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get user", message: error.message });
    }
  };
  export const encontrarDisponiblidadedate = async (req, res) => {
    try {
      let date = req.params.date;
      console.log(date);
      const disponibilidade = await findDispByIdMesaDateTime(date);
      console.log(disponibilidade);
      res.status(200).json({ disponibilidade });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get user", message: error.message });
    }
  };
  export const DeleteDisponiblidade = async (req, res) => {
    try {
      let dados = req.body;
      const Disponibilidade = await DelDisponibilidade(dados);
      res.status(200).json({ Disponibilidade });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to delet disponibilidade", message: error.message });
    }
  };

  export const encontrarMesasData = async (req, res) => {
    try {
      let data = req.query;
      const disponibilidade = await findMesaByDate(data);
      res.status(200).json({ disponibilidade});
      console.log(data.mesaId);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get user", message: error.message });
    }
  };
  
  export const create = async (req, res) => {
    try {
      let {mesaId, email, date,horarioReserv} = req.body;
      const user = await findUserByEmail(email);
      const mesa = await findMesaById(parseInt(mesaId));
      const data= {
        mesaId: mesa.id,
        userId: user.id,
        date: date,
        HorarioReservado: horarioReserv,
      };
    const info = await createReserva(data);
    return res.status(201).json({ info });} 
    catch (error) {
      res
        .status(500)
        .json({ error: "Failed to create Ad", message: error.message });
    }
  };

  export const encontrarReservaDataId = async (req, res) => {
    try {
      let userId = req.params.id;
      let date = req.params.date;
      const info = await findResByIdUserDateTime(date,userId);
      res.status(200).json({ info });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get user", message: error.message });
    }
  };

  export const encontrarReservaData = async (req, res) => {
    try {
      let date = req.params.date;
      const info = await findResByDateTime(date);
      res.status(200).json({ info });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get user", message: error.message });
    }
  }; 
  
  export const DeleteReserva = async (req, res) => {
    try {
      let id = req.body.id;
      const info = await DelReserva(id);
      res.status(200).json({ info });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get user", message: error.message });
    }
  };
  
  export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const ResData = req.body;
      const info = await updateRes(id, ResData);
      res.status(200).json({ info });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to update disponibilidade", message: error.message });
    }
  };

  
