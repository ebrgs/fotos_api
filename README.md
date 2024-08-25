<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Para instalar as dependências do projeto

```bash
$ npm install
```

## Configurando arquivo env
```
Abra o arquivo .env.example e renomeie para .env
em seguida adicione as informações necessárias para a conexão com o banco de dados
```

## Após a configuração do arquivo env

```bash
# development
$ npm run start
```

```
Criação de Usuario
```
<img src="https://res.cloudinary.com/ddziipofa/image/upload/v1724601372/bmduuyejhvbciorphfft.png" alt="NPM Version" />

```
Login de usuario
```

<img src="https://res.cloudinary.com/ddziipofa/image/upload/v1724601372/am9on3givodxjqttedkp.png" alt="NPM Version" />

```
Upload de imagem (Imagens devem ser inseridas na pasta fotos localizada na pasta src do projeto)
Todos os métodos a partir daqui exigem autenticação via Bearer Token
```

<img src="https://res.cloudinary.com/ddziipofa/image/upload/v1724601372/rmiylsd53dz9pkfed7k4.png" alt="NPM Version" />

```
Retornando todas as imagens relacionadas ao id do usuario
```

<img src="https://res.cloudinary.com/ddziipofa/image/upload/v1724601372/v5zwc9laurnpskqbmyf6.png" alt="NPM Version" />

```
Deletando a imagem do usuario utilizando o id publico e apenas se o usuario autenticado for o dono da imagem.
```

<img src="https://res.cloudinary.com/ddziipofa/image/upload/v1724601372/gad4zq7abud7s3cpmxqt.png" alt="NPM Version" />