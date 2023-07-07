import { User } from "../entities/user.entity"

export class UserRepository {
  users: User[] = []

  async findByUserName(username: string) {
    return this.users.find(user => user.name === username)
  }

  async save(data: User) {
    this.users.push(data)
    return data
  }
}