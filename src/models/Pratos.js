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

export const findPratosbyClass = async (classe) => {
  try {
    return await prisma.pratos.findMany({
      where: {
        pratoClass: classe
      },
    });
  } catch (error) {
    throw new Error(`Failed to get pratos: ${error.message}`);
  }
};

export const updatePrato = async (id, PratoData) => {
  return await prisma.pratos.update({
    where: {
      id: parseInt(id),
    },
    data: {
      pratoName: PratoData.pratoName,
      pratoValor: PratoData.pratoValor,
      pratoDesc: PratoData.pratoDesc,
      pratoClass: PratoData.pratoClass
    },
  });
};

export const DelPrato = async (id) => {
  return await prisma.pratos.delete({
    where: {
      id: parseInt(id),
    },
  });
};