import { Router } from 'express'
import DefaultRoutes from '../presentation/routes'

const routes = (app) => {
  app.use(Router())
  DefaultRoutes(app)
}

export default routes
