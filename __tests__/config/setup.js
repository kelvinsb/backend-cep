import request from 'supertest'
import app from '../../src/infra/app'

describe('App Setup', () => {
  test('Should disable x-powered-by header', async () => {
    app.get('/test_x_powered_by', (req, res) => {
      res.send('')
    })

    const res = await request(app).get('/test_x_powered_by')
    expect(res.headers['x-powered-by']).toBeUndefined()
  })
})

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send('')
    })

    const res = await request(app).get('/test_cors')
    expect(res.headers['access-control-allow-origin']).toBe('*')
  })
})

describe('JSON Parser Middleware', () => {
  test('Should parse body as JSON', async () => {
    app.post('/test_json_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test_json_parser')
      .send({ name: 'Some test' })
      .expect({ name: 'Some test' })
  })
})
