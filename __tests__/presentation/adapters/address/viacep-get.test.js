import AdapterViaCepToAddress from '../../../../src/presentation/adapters/address/viacep-get'

describe('viacep get adapter', () => {
  test('convert', (done) => {
    const data = {
      cep: '812302-103',
      logradouro: 'r brasil',
      complemento: 'esquina',
      bairro: 'centro',
      localidade: 'cidade',
      uf: 'PR',
    }
    expect(data).toEqual(AdapterViaCepToAddress(data))
    done()
  })
})
