const AdapterViaCepToAddress = (incomingData) => {
  const { cep, logradouro, complemento, bairro, localidade, uf } = incomingData
  return { cep, logradouro, complemento, bairro, localidade, uf }
}

export default AdapterViaCepToAddress
