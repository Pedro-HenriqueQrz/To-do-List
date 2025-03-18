# Gerenciador de Tarefas

Este é um projeto de Gerenciador de Tarefas desenvolvido com Node.js, Express, EJS, e MySQL. Ele permite que os usuários registrem, façam login, criem, atualizem e excluam tarefas.

## Funcionalidades

- Registro de usuários
- Login de usuários
- Logout de usuários
- Criação de tarefas
- Listagem de tarefas
- Atualização de tarefas
- Exclusão de tarefas
- Marcar tarefas como concluídas ou pendentes

## Tecnologias Utilizadas

- Node.js
- Express
- EJS
- MySQL
- Knex.js
- Bootstrap
- jQuery
- JWT (JSON Web Token)
- Bcrypt

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd gerenciador-de-tarefas
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Configure o banco de dados:
    - Crie um banco de dados MySQL e atualize o arquivo `.env` com suas credenciais:
        ```
        DB_HOST=localhost
        DB_USER=seu_usuario
        DB_PASS=sua_senha
        DB_NAME=nome_do_banco
        JWT_SECRET=sua_chave_secreta
        ```

5. Execute as migrações do banco de dados:
    ```sh
    npx knex migrate:latest
    ```

6. Inicie o servidor:
    ```sh
    npm start
    ```

7. Acesse o aplicativo no navegador:
    ```
    http://localhost:8080
    ```


## Rotas da API

### Usuários

- **Registrar um novo usuário**
    ```http
    POST /users/register
    ```

- **Login de usuário**
    ```http
    POST /users/login
    ```

- **Logout de usuário**
    ```http
    GET /users/logout
    ```

### Tarefas

- **Criar uma nova tarefa**
    ```http
    POST /tasks
    ```

- **Listar todas as tarefas**
    ```http
    GET /tasks
    ```

- **Atualizar uma tarefa**
    ```http
    PUT /tasks/:id
    ```

- **Atualizar o status de uma tarefa**
    ```http
    PUT /tasks/:id/status
    ```

- **Excluir uma tarefa**
    ```http
    DELETE /tasks/:id
    ```

## Autores

- [Pedro Henrique](https://github.com/Pedro-HenriqueQrz)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.