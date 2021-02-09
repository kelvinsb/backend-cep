export const makeCepUrl = (cep = null) =>
  `${process.env.VIA_CEP_URL}/${cep}/json`
