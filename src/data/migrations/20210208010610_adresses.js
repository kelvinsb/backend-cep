exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('addresses', (table) => {
    table.increments()
    table.string('short_cep')
    table.string('cep')
    table.string('logradouro')
    table.string('complemento')
    table.string('bairro')
    table.string('localidade')
    table.string('uf')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('addresses')
}
