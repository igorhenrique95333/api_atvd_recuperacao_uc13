import { createUser, findUserByEmail} from "../models/User.js";

export const signup = async (req, res) => {
  try {
    const data = req.body;
    const user = await findUserByEmail(data.email);
    if (user) {
      res.status(500).json({
        error: "Email already exists!",
      });
      return;
    }
    // Criar o usuário
    await createUser(
      {
        name: data.name,
        email: data.email,
        type: data.type,
        password: data.password,
        endereco: data.endereco,
        telefone: data.telefone,
      },
    );

    res.status(201).json({ telefone: data.telefone });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create user", message: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const {email, password }  = req.body;
    // Verificar se o email existe
    const user = await findUserByEmail(email);
    if (!user || user.password !== password) {
      res.status(401).json({ error: "Email or password invalid!" });
      return;
    }

    // Retornar o status
    res.status(200).json({ userId: user.id, email ,senha: user.password,tipo: user.type});
  } catch (error) {
    res.status(500).json({ error: "Failed to log in", message: error.message });
  }
};