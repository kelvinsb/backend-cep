import findAddressOrCreate from '../../application/usecases/find-address-or-create'
import FindCepValidator from '../validators/addresses/find-cep-validator'
import { AddressesRepository } from '../repositories/addresses'

class AddressController {
  static async findCep(request, response) {
    const { params } = request
    const validation = FindCepValidator.validate(params)

    if (validation.error) {
      const errors = validation.error.details
        .map((err) => err.message)
        .join(',')
      return response.status(400).json({
        errors,
      })
    }

    const { cep = null } = request.params
    return findAddressOrCreate(cep, AddressesRepository)
      .then((address) => response.status(200).json(address))
      .catch((err) =>
        response.status(500).json({
          message: 'Some error occurred',
          code: err.code,
        })
      )
  }
}

export default AddressController
