import { Router } from 'express'
import addressesRouter from '../../presentation/routes/addresses'

const routes = (app) => {
  app.use(Router())
  app.use('/addresses', addressesRouter)
}

export default routes
