  import {createReserva} from "../models/Reserva.js"
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
  
//   export const getList = async (req, res) => {
//     try {
//       let { sort = "asc", offset = 0, limit = 10, q, category } = req.query;
//       let total = 0;
//       let filters = { status: true };
//       const adsTotal = await findAllAds(filters);
//       total = adsTotal.length;
//       if (q) filters.title = q;
//       if (category) {
//         const categoryId = await findCategoryByName(category);
//         if (categoryId) filters.categoryId = categoryId.id;
//       }
//       limit = parseInt(limit);
//       const adsData = await findAllAds(filters, sort, limit, parseInt(offset));
//       let ads = [];
//       for (let i in adsData) {
//         let image;
//         let defaultImg = adsData[i].images?.find((e) => e.default);
  
//         if (defaultImg) image = `${process.env.BASE}/media/${defaultImg.url}`;
//         else image = `${process.env.BASE}/media/default.png`;
//         ads.push({
//           id: adsData[i].id,
//           title: adsData[i].title,
//           price: adsData[i].price,
//           priceNegotiable: adsData[i].priceNegotiable,
//           dateCreated: adsData[i].createdAt,
//           state: adsData[i].user.state.name,
//           image,
//         });
//       }
//       return res.status(200).json({ ads, total });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ error: "Failed to get list of ads", message: error.message });
//     }
//   };
  
//   export const getItem = async (req, res) => {
//     try {
//       let id = req.params.id;
//       if (!id) {
//         res.status(500).json({ error: "Id is not provided" });
//         return;
//       }
  
//       let ad = await findAdById(parseInt(id));
//       if (!ad) {
//         res.status(404).json({ error: "We didn't find the product" });
//         return;
//       }
  
//       const updates = {};
//       updates.views = ++ad.views;
//       await updateAd(parseInt(id), updates);
  
//       let images = [];
//       for (let i in ad.images) {
//         images.push(`${process.env.BASE}/media/${ad.images[i].url}`);
//       }
  
//       let category = await findCategoryById(ad.categoryId);
//       let userInfo = await findUserById(ad.userId);
//       return res.status(200).json({
//         id: ad.id,
//         title: ad.title,
//         price: ad.price,
//         priceNegotiable: ad.priceNegotiable,
//         description: ad.description,
//         dateCreated: ad.createdAt,
//         views: ad.views,
//         category,
//         userInfo: {
//           name: userInfo.name,
//           email: userInfo.email,
//         },
//         images: images,
//       });
//     } catch (error) {
//       throw new Error(`Failed to list ad: ${error.message}`);
//     }
//   };