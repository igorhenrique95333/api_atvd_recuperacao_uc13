import { prisma } from "../../config/prisma.js";

export const createUser = async (data) => {
  return await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      type: data.type,
      password: data.password,
      endereco: data.endereco,
      telefone: data.telefone,
    },
  });
};

export const findUserByEmail = async (email) => {
  try {
    return await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
} catch (error) {
    throw new Error(`Falha ao achar usuario: ${error.message}`);
}
};

export const findAllUsers = async () => {
  return await prisma.user.findMany({
  });
};

export const findUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {id},
  });
};