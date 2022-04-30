const BaseService = require('./base-service')
const Company = require('../models/company')
const userService = require('./user-service')

class CompanyService extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }

  async comment(userId, companyId, comment) {
    const user = await userService.find(userId)
    const company = await this.find(companyId)

    const comment = await this.insert({
      user,
      comment,
    })
    user.comments.unshift(comment)
    company.comments.unshift(comment)

    await user.save()
    await company.save()

    return comment
  }
}

module.exports = new CompanyService(Company)
