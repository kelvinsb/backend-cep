## Descrição

> Backend feito para obter dados de endereço de acordo com o CEP enviado para a api.

Tecnologias

1. `ExpressJs`: Micro Framework de NodeJs
2. `Mysql`: Banco de dados relacionados(utilizado para cache)

## Caracteristicas

- Deve ser feito um "cache" para as pesquisas/ceps
  - Salvandos estes no banco
- Caso não tenha no banco, então é feito a requisição para o serviço da [ViaCep](https://viacep.com.br/)
  - E depois salvo no banco

## Rotas

1. `/addresses/:cep`: onde `:cep` é o cep, utilizando somente números(sem o hífen, e exatamente 8 caracteres)
   - Exemplo: `http://localhost:3000/addresses/87303100`

## Rodando o projeto

Para facilitar o uso, foi utilizado o Docker, e todas as dependências necessárias são instaladas com ele. Para isto é preciso executar no terminal:

```bash
docker-compose up -d
```

E a requisição será feita para
`http://localhost:3000`

Para executar os testes basta executar o comando do docker(ou pelo menos o banco), em seguida(é necessário instalação de npm ou yarn):

```bash
yarn migration:latest
yarn test
```

ou

```bash
npm run migration:latest
npm run test
```

## Arquitetura

Foi feitado baseado nos conceitos de `Arquitetura limpa`, utilizando testes(com `jest`) para validação do projeto.
