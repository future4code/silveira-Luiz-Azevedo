# Projeto: Case2 - AmbulnzLLC

### Projeto desenvolvido em julho de 2022, por Luiz Vinícius de Azevedo.

### Documentação da API:

https://documenter.getpostman.com/view/20356729/Uzds49FF

<br>

### Link da aplicação



<br>

## Sobre o projeto: 
Desenvolvido como teste para um case de processo seletivo legado, onde simula-se uma aplicação para pedir pizzas delivery.

<br>

### CRIAR PIZZAS
O usuário precisa preencher os campos: name, price e ingredients para cadastrar novas pizzas ao banco de dados. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado automático diretamente no Banco de Dados através do auto_increment.

<br>

### BUSCAR PIZZAS
Endpoint para buscar todas as pizzas do banco de dados. 

<br>


### DELETE PIZZA
Endpoint para deletar pizza do banco de dados. Demanda a ID da pizza via path params.

<br>


### BUSCAR PEDIDOS
Endpoint para buscar todos os pedidos realizados pelo usuário.
<br>


### BUSCAR PEDIDO DO USUÁRIO
Endpoint para buscar um pedido específico com seus detalhes. Demanda a ID do pedido via path params.

<br>

### REALIZAR UM PEDIDO
Endpoint para realizar um pedido. Demanda pizza e quantity via body.É necessário o preenchimento de todos os campos para a finalização da função.

<br>


## Tecnologias utilizadas:
- Node.js
- Typescript
- MYSQL
- Programação Orientada à Objetos
- Postman
- Git
<br>
<br>

## Linguagens e libs utilizadas:
- Typescript
- mysql
- dotenv
- express
- knex

<br>
<br>

### Conhecimentos adquiridos durante o desenvolvimento do projeto:
- Integração com banco de dados externo.
- Requisições API Rest.

<br>
<br>

### Como rodar a aplicação:
- Clone o projeto no terminal utilizando o git clone;
- Na pasta do projeto, instale as dependências com o comando npm install;
- Crie um arquivo .env com as configurações do seu banco de dados(preferencialmente MySQL, que foi o banco de dados utilizado no projeto);
- No arquivo .env, deverá ficar dessa forma:

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_senha
DB_SCHEMA = seu_banco_de_dados
JWT_KEY = chave_jwt
ACCESS_TOKEN_EXPIRES_IN = "tempo_de_expiração_do_token"
BCRYPT_COST = custo_da_aplicação
```
- Por fim, execute a aplicação rodando o comando npm start, ou npm run start para deixar o projeto rodando o tempo todo.
OBSERVAÇÃO: você pode testar os endpoints em um arquivo request.rest ou através de um cliente HTTP (ex: postman), utilizando o endereço http://rede-social-cookenu.herokuapp.com/ como URL padrão para as requisições. Para obter informações de cada endpoint, consulte a documentação.
<br>

## EXTRA

Tabelas criadas no MySQL Workbench para o desenvolvimento do projeto:

- Tabela de usuário
```
CREATE TABLE case2_pizzas(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
price FLOAT NOT NULL,
ingredients TEXT NOT NULL
);
```
```
CREATE TABLE orders_list_case2(
id INT PRIMARY KEY AUTO_INCREMENT,
items VARCHAR(255) NOT NULL
);
```
```
CREATE TABLE orders_details_case2(
id INT PRIMARY KEY AUTO_INCREMENT,
pizza VARCHAR(255) NOT NULL,
quantity INT NOT NULL,
FOREIGN KEY (id) REFERENCES orders_list_case2(id)
);
```