import { prisma } from "../../config/prisma.js";

export const findAllDisponibildade = async () => {
  return await prisma.disponibilidade.findMany({
  });
};


export const findDisponiblidadeByIdMesa = async (id) => {
  try {
    return await prisma.disponibilidade.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(`Failed to get mesa: ${error.message}`);
  }
};

export const findDispByIdMesaDateTime = async (dados) => {
  try {
    return await prisma.disponibilidade.findMany({
      where: {
        DateDisponivel: dados,
      },
    });
  } catch (error) {
    throw new Error(`Failed to get mesa: ${error.message}`);
  }
};

export const DelDisponibilidade = async (data) => {
  console.log(data.id);
  return await prisma.disponibilidade.delete({
    where: {
      id: parseInt(data.id),
    },
  });
};

export const createDiponibilidade = async (data) => {
  try {
    return await prisma.disponibilidade.create({
      data: {
        mesaId: data.mesaId,
        DateDisponivel: data.DateDisponivel,
        hora_inicio: data.hora_inicio,
        hora_fim: data.hora_fim,
      },
    });
  } catch (error) {
    throw new Error(`Failed to create ad: ${error.message}`);
  }
};

export const updateDisp = async (id, DispData) => {
  return await prisma.disponibilidade.update({
    where: {
     
      id: parseInt(id),
    },
    data: {
      mesaId: parseInt(DispData.mesaId),
      DateDisponivel: DispData.DateDisponivel,
      hora_inicio: DispData.hora_inicio,
      hora_fim: DispData.hora_fim
    },
  });
};
