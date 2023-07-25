import { randomUUID } from "crypto"
import { CustomError } from "../../../errors/custom.error"

type ISpeciality = {
  name: string
  description: string
}

export class Speciality {
  id: string
  name:string
  description: string
  createdAt: Date
  
  private constructor({ name, description }: ISpeciality) {
    this.id = randomUUID()
    this.name = name
    this.description = description
    this.createdAt = new Date()
  }

  static create(props: ISpeciality) {

    if(!props.name)
      throw new CustomError("Name is required", 401, "SPEACLILITY_NAME_IS_REQUIRED")

    const speciality = new Speciality(props);
    return speciality
  }
}