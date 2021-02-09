import axios from 'axios'
import HttpRequest from '../../../src/infra/http/axios-client'
import { createAxiosMock } from '../../helpers/axios'

jest.mock('axios')

axios.request = jest.fn()

describe('axios http client', () => {
  test('request with 200', async (done) => {
    createAxiosMock(axios, 200, {})
    const theRequest = new HttpRequest()
    const response = await theRequest.request({
      url: 'http://localhost:231321',
    })
    expect(response.body).toEqual({})
    expect(response.statusCode).toEqual(200)
    // expect(mock.get).toBeenCalled()

    done()
  })
})
