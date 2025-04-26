# Pagina de Cadastro de Usuário

Basicamente é uma página de cadastro de usuário, com os campos de ID, Nome e Telefone como requisitados no Documento de Design, onde as APIs e o banco de dados é colocado em containers, um para cada API e um terceiro para o front-end.

# Para Executar

Primeiro se certifique de estar no diretório das APIs (MongoAPI e cadastroDeUsuario) e construa as imagens e as suba para os containers:

Para Gerar a Imagem:

```powershell
docker-compose build
```

Para Subir o Container:

```powershell
docker-compose up -d
```

E então você pode acessar as APIs através do projeto em React usando o comando `npm start` dentro do diretório signin-frontend.