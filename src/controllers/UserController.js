import { findAllUsers, findUserById} from '../models/User.js';
import { findUserByEmail} from '../models/User.js';

export const encontrarUser = async (req, res) => {
  try {
    const funcionarios = await findAllUsers();
    res.status(200).json({ funcionarios });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get funcionarios", message: error.message });
  }
};
export const encontrarUserEmail = async (req, res) => {
    try {
      let email = req.params.email;
      const user = await findUserByEmail(email);
      res.status(200).json({ user });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get user", message: error.message });
    }
  };
  export const encontrarUserId = async (req, res) => {
    try {
      let id = req.query.id;
      let numero = Integer.parseInt(id);
      const user = await findUserById(numero);
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ error: "Failed to get user", message: error.message });
    }
  };

export const info = async (req, res) => {
  try {
    let email = req.body.email;
    if (!email) {
      res.status(500).json({ error: "Email was not provided" });
      return;
    }
    const user = await findUserByEmail(email);
    res.status(200).json({
      name: user.nome,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to get info of the funcionario",
      message: error.message,
    });
  }
};