import { prisma } from "../../config/prisma.js";

export const findAllPratos = async () => {
  try {
    return await prisma.pratos.findMany();
  } catch (error) {
    throw new Error(`Failed to get all pratos ${error.message}`);
  }
};

export const createPrato = async (data) => {
  try {
    return await prisma.pratos.create({
      data: {
        pratoName: data.pratoName,
        pratoValor: data.pratoValor,
        pratoDesc: data.pratoDesc,
        pratoClass: data.pratoClass
      },
    });
  } catch (error) {
    throw new Error(`Failed to create ad: ${error.message}`);
  }
};