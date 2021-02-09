import faker from 'faker'

export const newAddressFactory = () => {
  const cepPartOne = faker.random.number({ digits: 5 })
  const cepParteTwo = faker.random.number({ digits: 3 })
  return {
    id: faker.random.number(),
    cep: `${cepPartOne}-${cepParteTwo}`,
    short_cep: `${cepPartOne}${cepParteTwo}`,
    logradouro: faker.address.streetName(),
    complemento: faker.address.secondaryAddress(),
    bairro: faker.address.county(),
    localidade: faker.address.city(),
    uf: faker.address.state(),
  }
}
