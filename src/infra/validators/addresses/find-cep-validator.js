import Joi from 'joi'

const FindCepValidator = Joi.object({
  cep: Joi.string()
    .length(8)
    .pattern(/^[0-9]+$/)
    .message('O parâmetro deve ser um número de exatamente 8 digitos'),
})

export default FindCepValidator
