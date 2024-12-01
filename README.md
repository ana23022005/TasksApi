# Controle de Tarefas e Produtividade

Este é um projeto de backend para um sistema de **controle de tarefas e produtividade**, usando **Node.js**, **Express**, **Sequelize**, e **MySQL**. O sistema permite a criação, leitura, atualização e exclusão de tarefas, bem como a categorização das mesmas e gerenciamento de usuários.

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web para Node.js para gerenciar rotas e middlewares.
- **Sequelize**: ORM (Object-Relational Mapping) para interagir com bancos de dados relacionais.
- **MySQL**: Banco de dados relacional.
- **JWT (JSON Web Tokens)**: Para autenticação e autorização de usuários.
- **dotenv**: Carrega as variáveis de ambiente.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

Além disso, se você estiver usando variáveis de ambiente, o pacote `dotenv` é necessário.

## Configuração do Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/controle-de-tarefas-e-produtividade.git
cd controle-de-tarefas-e-produtividade
```

### 2. Instale as dependências

Use o npm (ou yarn, se preferir) para instalar as dependências do projeto:

```bash
npm install
```

### 3. Configure o banco de dados

Antes de iniciar a aplicação, crie um banco de dados no MySQL e adicione suas credenciais ao arquivo `.env`.

#### Exemplo de configuração no `.env`

```env
MYSQL_DATABASE=controle_de_tarefas
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_HOST=localhost
JWT_SECRET=seu-segredo-jwt
PORT=3000
```

- **`MYSQL_DATABASE`**: Nome do banco de dados.
- **`MYSQL_USER`**: Usuário do banco de dados.
- **`MYSQL_PASSWORD`**: Senha do banco de dados (deixe em branco se não houver).
- **`MYSQL_HOST`**: Endereço do servidor MySQL (geralmente `localhost`).
- **`JWT_SECRET`**: Chave secreta usada para gerar tokens JWT.
- **`PORT`**: Porta em que o servidor rodará.

### 4. Configure o banco de dados MySQL

Crie o banco de dados no MySQL:

```bash
mysql -u root -p
CREATE DATABASE controle_de_tarefas;
```

### 5. Execute as migrations

Após configurar o banco de dados, execute as migrations para criar as tabelas:

```bash
npx sequelize-cli db:migrate
```

### 6. Inicie o servidor

Agora, você pode iniciar o servidor com o seguinte comando:

```bash
npm start
```

Isso deve iniciar o servidor na porta 3000 (ou a porta definida no `.env`).

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```
controle_de_tarefas_e_produtividade/
├── controllers/
│   ├── authController.js
│   ├── categoryController.js
│   └── taskController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Category.js
│   ├── Task.js
│   ├── User.js
│   └── index.js
├── routes/
│   ├── authRoute.js
│   ├── categoryRoutes.js
│   └── taskRoutes.js
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

- **`controllers/`**: Contém a lógica dos controladores para manipulação de dados.
- **`middleware/`**: Contém middlewares personalizados, como autenticação JWT.
- **`models/`**: Contém a definição dos modelos de banco de dados, utilizando Sequelize.
- **`routes/`**: Define as rotas e endpoints da API.
- **`server.js`**: Arquivo de entrada para iniciar o servidor.
- **`app.js`**: Arquivo que configura o Express e as rotas.
