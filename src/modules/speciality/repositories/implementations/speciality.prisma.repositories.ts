import { prismaClient } from "../../../../infra/databases/prisma.config";
import { Speciality } from "../../entities/speciality.entity";
import { ISpecialityRepository } from "../speciality.repositories";

export class SpecialityPrismaRepository implements ISpecialityRepository {
  async save(data: Speciality): Promise<Speciality> {
    return await prismaClient.speciality.create({
      data: {
        name: data.name,
        description: data.description,
        id: data.id,
      },
    });
  }
}
