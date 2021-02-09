class Address {
  constructor({
    id = null,
    cep,
    short_cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
  }) {
    this.id = id
    this.cep = cep
    this.short_cep = short_cep
    this.logradouro = logradouro
    this.complemento = complemento
    this.bairro = bairro
    this.localidade = localidade
    this.uf = uf
  }
}

export default Address
