import '../config/env'
import express from 'express'
import setup from '../config/setup'
import routes from '../config/routes'

const app = express()

setup(app)
routes(app)

export default app
