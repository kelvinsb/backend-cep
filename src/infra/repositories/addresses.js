import db from '../helpers/database'

export class AddressesRepository {
  static async findByCep(cep) {
    const result = await db.from('cep_search.addresses').where({
      short_cep: cep,
    })
    return result
  }

  static async find(id) {
    const result = await db.from('cep_search.addresses').where({
      id: id,
    })
    return result
  }

  static async insert(address) {
    const result = await db('cep_search.addresses').insert(address)
    return result
  }
}
