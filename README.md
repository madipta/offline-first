# Offline

Sample offline first using Nx monorepo, React, RxDb, NestJs, Prisma, GraphQl, PostgreSql

## Install

install nx cli globaly
`npm install -g nx`

install node_modules packages
`npm install or yarn`

install postgreSql https://www.postgresql.org/download/ or using docker https://hub.docker.com/_/postgres then `set DATABASE_URL on .env file`

make sure database service is running beofre generate database

generate database
`npm run migrate:dev`  

generate prismagraphql
`npm run prisma:generate`  

## How to Run

run React web server
`nx serve`

run nest api server
`nx serve api`


<p>
  <img src="https://raw.githubusercontent.com/madipta/offline-first/master/screenshot/screenshot-01-min.png" width="150">
  <img src="https://raw.githubusercontent.com/madipta/offline-first/master/screenshot/screenshot-03-min.png" width="150">
  <img src="https://raw.githubusercontent.com/madipta/offline-first/master/screenshot/screenshot-02-min.png" width="150">
  <img src="https://raw.githubusercontent.com/madipta/offline-first/master/screenshot/screenshot-04-min.png" width="150">
</p>
