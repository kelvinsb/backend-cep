import Address from '../../../../src/application/entities/address'
import { newAddressFactory } from '../../../helpers/factories/address'

describe('Unit test - entities - address', () => {
  test('create', (done) => {
    const addr = newAddressFactory()
    const addrObject = new Address(addr)
    const addrObjectCopy = { ...addrObject }
    expect(addr).toEqual(addrObjectCopy, addrObject)

    done()
  })
})
