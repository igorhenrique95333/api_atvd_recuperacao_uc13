import { prisma } from "../../config/prisma.js";

export const createReserva = async (data) => {
  try {
    return await prisma.reservas.create({
      data: {
        mesaId: data.mesaId,
        userId: data.userId,
        Date: data.date,
        HorarioReservado: data.HorarioReservado,
      },
    });
  } catch (error) {
    throw new Error(`Failed to create ad: ${error.message}`);
  }
};

export const findResByIdUserDateTime = async (date,userId) => {
  try {
    return await prisma.reservas.findMany({
     where: {
      Date: date,
      userId:parseInt(userId),
      },
    });
  } catch (error) {
    throw new Error(`Failed to get reserva: ${error.message}`);
  }
};

export const findResByDateTime = async (date) => {
  try {
    return await prisma.reservas.findMany({
     where: {
      Date: date,
      },
    });
  } catch (error) {
    throw new Error(`Failed to get reserva: ${error.message}`);
  }
};

export const DelReserva = async (id) => {
  return await prisma.reservas.delete({
    where: {
      id: parseInt(id),
    },
  });
};

export const updateRes = async (id, ResData) => {
  return await prisma.reservas.update({
    where: {
      id: parseInt(id),
    },
    data: {
      mesaId: parseInt(ResData.mesaId),
      HorarioReservado: ResData.horario,
      Date: ResData.date,
    },
  });
};