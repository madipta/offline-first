# Offline

Sample offline first using Nx monorepo, React, RxDb, NestJs, Prisma, GraphQl, PostgreSql

## Install

install nx cli globaly
`npm install -g nx`

install node_modules packages
`npm install or yarn`

install postgreSql https://www.postgresql.org/download/ then set DATABASE_URL on .env file
make sure postgresql is running!

generate database
`npm run migrate:dev`  

generate prismagraphql
`npm run prisma:generate`  

## How to Run

run angular web server
`nx serve`

run nest api server
`nx serve api`


<p>
  <img src="https://github.com/madipta/nx-pwa/blob/master/screenshot/screenshot-1-min.png?raw=true" width="250">
  <img src="https://github.com/madipta/nx-pwa/blob/master/screenshot/screenshot-2-min.png?raw=true" width="250">
</p>