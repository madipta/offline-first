# Offline

Sample offline first using Nx monorepo, React, Mantine, RxDb, NestJs, Prisma, GraphQl, PostgreSql

## Install

clone this repo `git clone https://github.com/madipta/offline-first.git`

goto folder
`cd offline-first`

install node_modules packages
`npm install` or `yarn`

run postgresql using docker
`docker-compose up`

make sure database service is running before generate database

then generate database
`npm run migrate:dev` or `yarn run migrate:dev`

generate prisma client
`npm run prisma:generate` or `yarn run prisma:generate`  

## How to Run

run nest api server
`npx nx serve api` or `yarn nx serve api`

run React web server
`npx nx serve` or `yarn nx serve`

open browser http://localhost:4200

<p>
  <img src="https://raw.githubusercontent.com/madipta/offline-first/master/screenshot/screenshot-01-min.png" width="150">
  <img src="https://raw.githubusercontent.com/madipta/offline-first/master/screenshot/screenshot-03-min.png" width="150">
  <img src="https://raw.githubusercontent.com/madipta/offline-first/master/screenshot/screenshot-02-min.png" width="150">
  <img src="https://raw.githubusercontent.com/madipta/offline-first/master/screenshot/screenshot-04-min.png" width="150">
</p>
