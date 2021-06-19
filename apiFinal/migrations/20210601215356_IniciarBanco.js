
exports.up = function(knex) {
  return knex.schema
    .createTable('dados', table => {
    table.increments('id').primary()
    table.string('Nome').notNull()
    table.string('Sobrenome').notNull()
    table.string('Fone').notNull()
    table.string('CEP').notNull()
    table.boolean('PossuiNumero').notNull().defaultTo(false)
    table.integer('Numero').defaultTo(0)
    table.integer('Quadra').defaultTo(0)
    table.integer('Lote').defaultTo(0)
    })

    .createTable('operadoras', table => {
      table.increments('id').primary()
      table.integer('serie').unique().notNull()
      table.string('nome').notNull()
    })
    
    .createTable('buscas', table => {
      table.increments('id').primary()
      table.integer('userId').references('id').inTable('dados')
      table.integer('OperadoraId').references('serie').inTable('operadoras')
      table.string("imgOperadora", 1000).notNull()
      table.string('Velocidade').notNull()
      table.string('Tipo').notNull()
      table.string('Descricao', 1000)
      table.float('Valor').notNull()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('buscas')
    .dropTable('dados')
    .dropTable('operadoras')
};
