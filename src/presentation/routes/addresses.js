import express from 'express'
import AddressController from '../../infra/controllers/address-controller'

const router = express.Router()

router.get('/', (req, res) => res.status(200).json({}))

router.get('/:cep', AddressController.findCep)

export default router
