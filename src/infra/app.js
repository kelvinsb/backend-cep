import '../main/config/env'
import express from 'express'

import setup from '../main/config/setup'
import routes from '../main/config/routes'

const app = express()

setup(app)
routes(app)

export default app
