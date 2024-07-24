
import { prisma } from "../../config/prisma.js";

export const findAllMesas = async () => {
    try {
      return await prisma.mesas.findMany();
    } catch (error) {
      throw new Error(`Failed to get all categories ${error.message}`);
    }
  };

export const findMesaById = async (id) => {
    try {
      return await prisma.mesas.findUnique({
        where: {
          id: parseInt(id),
        },
      });
    } catch (error) {
      throw new Error(`Failed to get mesa: ${error.message}`);
    }
  };

  export const findMesaByDate= async (date) => {
    try {
      return await prisma.disponibilidade.findMany({
        where: {
          DateDisponivel: date.date,
          mesaId: parseInt(date.mesaId),
        },
      });
    } catch (error) {
      throw new Error(`Failed to get mesa: ${error.message}`);
    }
  };
  export const createMesa = async (data) => {
    try {
      return await prisma.mesas.create({
        data: {
          mesaCapact: data.mesaCapact,
        },
      });
    } catch (error) {
      throw new Error(`Failed to create ad: ${error.message}`);
    }
  };

  export const DelMesa = async (id) => {
  return await prisma.mesas.delete({
    where: {
      id: parseInt(id),
    },
  });
};
export const updateMesa = async (id, MesaData) => {
  return await prisma.mesas.update({
    where: {
      id: parseInt(id),
    },
    data: {
      mesaCapact: parent(MesaData.mesaCapact),
    },
  });
};
