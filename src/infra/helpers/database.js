import Knex from 'knex'
import knex from '../../main/config/knex'
const { NODE_ENV: environment = 'development' } = process.env
const config = knex[environment]
const db = Knex(config)

export default db
