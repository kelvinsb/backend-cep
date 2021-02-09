import { makeCepUrl } from '../../factories/api-url'
import { makeHttpRequest } from '../../factories/http-request'
import AdapterViaCepToAddress from '../../presentation/adapters/address/viacep-get'
import InternalServerError from '../../presentation/errors/server-error'
import Address from '../entities/address'

const getOnCache = (cep, AddressesRepository) => {
  return AddressesRepository.findByCep(cep)
}

const registerEntity = (body, cep) =>
  new Address({
    ...AdapterViaCepToAddress(body),
    short_cep: cep,
  })

const findAddressOrCreate = async (cep, AddressesRepository) => {
  const registeredAddress = await getOnCache(cep, AddressesRepository)
  const existInCache = registeredAddress.length > 0
  if (existInCache) {
    return registeredAddress
  }

  const getAddressDetailsFromExternal = await makeHttpRequest().request({
    url: makeCepUrl(cep),
  })

  const { statusCode, body } = getAddressDetailsFromExternal

  if (statusCode === 200) {
    const entity = registerEntity(body, cep)
    const registerAddress = await AddressesRepository.insert(entity)
    if (registerAddress) {
      const result = await AddressesRepository.find(registerAddress[0])
      return result
    }
    throw new InternalServerError(1)
  }
  throw new InternalServerError(2)
}

export default findAddressOrCreate
