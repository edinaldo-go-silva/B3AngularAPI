## ========================================================= ##
##                                                           ##
##                       EDINALDO SILVA                      ##
##                          B3 ABR/2024                      ##
##                  GERENCIADOR TAREFAS ANGULAR              ##
##                                                           ##
## ========================================================= ##

Desenvolver uma aplicação que simule um gerenciador de tarefas, sendo o backend construído em Node JS e o frontend em Angular.
Implementar um sistema de lista de tarefas, onde seja possivel criar, excluir ou concluir uma tarefa. 
As requisições deverão ser feitas por meio de uma api para cada ação. 
O usuário deverá fazer login na aplicação com um email e uma senha.



## Instalação
# Vá para o diretório principal
cd B3TaskManager
```

```
# Vá para o diretório do servidor
cd B3TaskManager\server

# Instale as dependencias
npm install

# Inicie o Docker compose para usar o Banco Postgres
docker-compose up -d

# running on port 8080

# Credenciais configuradas no Docker

	database:  "management",
	user:  "management",
	password:  "root",
	port:  "8080"

# Credenciais configuradas no KnexFile

{
	client:  "pg",
	connection: {
		post:  "localhost",
		database:  "management",
		user:  "management",
		password:  "root",
		port:  "8080"
	}
}

# Execute as migrations
npm run knex:migrate

# Rode a API
npm run dev

# running on port 3333




# FRONT-END
# Vá para o diretório FrontEnd
cd B3TaskManager\web

# Instale as dependências
npm install

# Corrigindo Versionamento
set NODE_OPTIONS=--openssl-legacy-provider && npm run start

# Inicie o servidor do frontEnd
npm start

# running on port 4200
