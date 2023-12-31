import { SpecialityPrismaRepository } from "../../repositories/implementations/speciality.prisma.repositories";
import { CreateSpecialityController } from "./create-speciality.controller";

const specialityPrismaRepository = new SpecialityPrismaRepository();
const createSpecialityController = new CreateSpecialityController(specialityPrismaRepository);

export { createSpecialityController };
