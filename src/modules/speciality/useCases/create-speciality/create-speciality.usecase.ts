import { ISpeciality, Speciality } from "../../entities/speciality.entity";
import { ISpecialityRepository } from "../../repositories/speciality.repositories";

export class CreateSpecialityUseCase {
  constructor(private specialityRepository: ISpecialityRepository) {}

  async execute(data: ISpeciality) {
    const specility = Speciality.create(data);
    const specialityCreated = await this.specialityRepository.save(specility);

    return specialityCreated;
  }
}
