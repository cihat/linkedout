const BaseService = require('./base-service')
const User = require('../models/user')

class UserService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }

  async updateName(userId, name) {
    const user = await this.find(userId)
    user.name = name

    await user.save()
    return user
  }

  async follow(userId, userToFollowId) {
    const user = await this.find(userId)
    const userToFollow = await this.find(userToFollowId)

    if (userId == userToFollow) return

    user.following.push(userToFollow)
    userToFollow.followers.push(user)

    await user.save()
    await userToFollow.save()

    return user
  }
}

module.exports = new UserService(User)
