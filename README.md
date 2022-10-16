# Boas vindas ao repositório do Trybe Futebol Clube!

  O `TFC` é um site informativo sobre partidas e classificações de futebol! 

  Desenvolver uma API (utilizando o método `TDD`) e também integrar, através do docker-compose, as aplicações para que elas funcionem consumindo um banco de dados.

  Nesse projeto foi construído um back-end dockerizado utilizando **modelagem de dados através do Sequelize**.

  Para adicionar uma partida é necessário ter um _token_, portanto a pessoa deverá estar logada para fazer as alterações. Teremos um relacionamento entre as tabelas `teams` e `matches` para fazer as atualizações das partidas.

<details>
  <summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 4 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Tem o papel de fornecer dados para o serviço _back-end_.
  - Para resetar o banco de dados, criando e rodando as _migrations_ e _seeders_. Use o comando `npm run db:reset` na pasta `app/backend`;

2️⃣ **Back-end:**
 - Fornece APIs para consumir o _Banco de Dados_;
 - Roda na porta `3001`, pois o _front-end_ faz requisições para ele na porta `3001` por padrão;
  
3️⃣ **Front-end:**
  - Esse site faz requisições para o _back-end_ na porta `3001` para acessar e modificar os dados do banco através dos endpoints construídos;

4️⃣ **Docker:**
  - O Docker entra com o papel de unir todas as partes e subir um projeto completo com um comando só via o `docker-compose`;
  
</details>

<details>
  <summary><strong>⚠️ Configurações mínimas nas máquinas locais para rodar o projeto</strong></summary><br />


Na sua máquina você deve ter:
	
 - Sistema Operacional Distribuição Unix
 - Node versão 16  
 - Docker
 - Docker-compose versão 1.29.2
	
	
➡️ O `node` deve ter versão igual ou superior à `16.15.0 LTS`. 

➡️ O`docker-compose` deve ter versão igual ou superior à`ˆ1.29.2`:


</details>

<details>

  <summary><strong><h4> Variáveis de ambiente </h4></strong></summary><br/>


 - Você vai precisar configurar as variáveis globais do MySQL no arquivo .env na raiz do _back-end_.
   ```
   JWT_SECRET=seu-segredo
   APP_PORT=3001
   DB_USER=root
   DB_PASS=sua_senha_aqui
   DB_HOST=localhost 
   DB_PORT=3306
   ```


</details>

<details>

 <summary><h4> Testes de cobertura </h4></summary><br/>

  A construção de testes de cobertura no back-end foi feita em *TypeScript*, utilizando `mocha`, `chai` e `sinon`, na pasta `app/backend/src/tests/`.

<!-- Para rodar testes de cobertura no seu back-end, utilize o comando: `npm run test:coverage` -->

</details>

 <details>

  <summary><h4><strong> 👀 Dicas e comandos úteis </strong></h4></summary><br/>


  - Ao rodar o comando `npm install` na pasta raiz do projeto você automaticamente estará **instalando suas aplicações (front e back)**;
  - Você pode **instalar suas aplicações (front e back)** rodando o comando `npm run install:apps` na pasta raiz do projeto;
  - Você pode rodar o avaliador **mostrando as operações que o navegador vai fazer no front-end** durante os testes E2E utilizando o comando `npm run test:browser`;
  - Você pode **subir ou descer uma aplicação do compose**, utilizando `npm run` com os scripts `compose:up`, `compose:down`;

</details>

<br/>
