import { User } from "../entities/user.entity";
export interface IUserRepository {
  findByUserName(username: string): Promise<User | undefined>
  save(data: User): Promise<User>
}