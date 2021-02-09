/* eslint-disable no-unused-vars */
import { newAddressFactory } from '../../helpers/factories/address'
import db from '../../../src/infra/helpers/database'
import { AddressesRepository } from '../../../src/infra/repositories/addresses'

describe('address repository', () => {
  beforeEach(async () => {
    await db('addresses').truncate()
  })

  afterAll(async () => {
    await db.destroy()
  })

  test('insert', async (done) => {
    const addr = newAddressFactory()
    const insertedAddr = await AddressesRepository.insert(addr)
    expect(insertedAddr.length).toEqual(1)
    expect(addr.id).toEqual(insertedAddr[0])
    done()
  })
  test('findByCep', async (done) => {
    const addr = newAddressFactory()
    const insertedAddr = await AddressesRepository.insert(addr)
    expect(insertedAddr.length).toEqual(1)
    expect(addr.id).toEqual(insertedAddr[0])

    const find = await AddressesRepository.findByCep(addr.short_cep)
    const [{ created_at, updated_at, ...findWithoutTimeStamps }] = find
    expect(findWithoutTimeStamps).toEqual(addr)
    done()
  })
  test('find', async (done) => {
    const addr = newAddressFactory()
    let addedId = 0
    const insertedAddr = await AddressesRepository.insert(addr)
    expect(insertedAddr.length).toEqual(1)
    expect(addr.id).toEqual(insertedAddr[0])
    addedId = insertedAddr[0]

    const find = await AddressesRepository.find(addedId)
    const [{ created_at, updated_at, ...findWithoutTimeStamps }] = find
    expect(findWithoutTimeStamps).toEqual(addr)
    done()
  })
})
