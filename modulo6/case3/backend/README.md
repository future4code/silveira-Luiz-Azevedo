# Projeto: Case1 - CuboNetworking

### Projeto desenvolvido em agosto de 2022, por Luiz Vinícius de Azevedo.

### Documentação da API:



<br>

### Link da aplicação



<br>

## Sobre o projeto: 


<br>

### 


<br>

### 


<br>


### 


<br>


### 


<br>


### 


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
CREATE TABLE case1 (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  participation float not null 
)

```