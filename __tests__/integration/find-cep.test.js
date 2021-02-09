import request from 'supertest'
import app from '../../src/infra/app'
import db from '../../src/infra/helpers/database'
import { AddressesRepository } from '../../src/infra/repositories/addresses'
import axios from 'axios'
import { createAxiosMock } from '../helpers/axios'
import fs from 'fs'

var loadFixture = (fixture) =>
  JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${fixture}.json`))

jest.mock('axios')
axios.request = jest.fn()

describe('integration /addresses', () => {
  beforeAll(async (done) => {
    await db.migrate.latest()
    done()
  })

  afterAll(async () => {
    await db.destroy()
  })

  test('request and get details and check saved on database', async (done) => {
    const result = loadFixture('01')
    const cep = '87045000'
    const mocked = createAxiosMock(axios, 200, result)

    const response = await request(app).get(`/addresses/${cep}`)

    expect(mocked).toHaveBeenCalledTimes(1)
    expect(response.status).toBe(200)
    expect(response.body).toEqual([expect.objectContaining(result)])

    const savedOnDb = await AddressesRepository.findByCep(cep)
    expect(savedOnDb.length).toEqual(1)

    done()
  })

  test('request and get details and check saved on database and check if cached', async (done) => {
    const result = loadFixture('02')
    const cep = '87020000'

    const mocked = createAxiosMock(axios, 200, result)
    await request(app).get(`/addresses/${cep}`)
    const response = await request(app).get(`/addresses/${cep}`)

    expect(response.status).toBe(200)
    expect(response.body).toEqual([expect.objectContaining(result)])
    expect(mocked).toHaveBeenCalledTimes(1)

    const savedOnDb = await AddressesRepository.findByCep(cep)
    expect(savedOnDb.length).toEqual(1)

    done()
  })
  test('error: when details could not be obtained on external api', async (done) => {
    const result = {}
    const cep = '87303090'
    const mocked = createAxiosMock(axios, 404, result)

    const response = await request(app).get(`/addresses/${cep}`)

    expect(response.status).toBe(500)
    expect(response.body).toEqual({
      code: 2,
      message: 'Some error occurred',
    })
    expect(mocked).toHaveBeenCalledTimes(1)

    const savedOnDb = await AddressesRepository.findByCep(cep)
    expect(savedOnDb.length).toEqual(0)

    done()
  })
})
