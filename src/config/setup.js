import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import helmet from 'helmet'
const origin = {
  origin: '*',
}

const setup = (app) => {
  app.disable('x-powered-by')
  app.use(cors(origin))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(helmet())
  app.use(morgan('combined'))
}

export default setup
