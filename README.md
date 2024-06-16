# Answer AI Assessment

Quick Start Guide

1. Install [Node.js](https://nodejs.org/en/download/) - _for IDE type checking_.
2. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/) - _for IDE type checking_.
3. Install [Docker Compose](https://docs.docker.com/compose/install/) and make sure it is running in the system background.
4. Clone the app:

```bash
git clone git@github.com:promiseer/Parmeshwar-Rathod-AnswersAi-Backend.git
```

5. Install npm packages - _for IDE type checking_.

```bash
cd Parmeshwar-Rathod-AnswersAi-Backend
yarn install --frozen-lockfile
```

6. Build and run the Docker image.

```bash
yarn docker-compose:dev
```

7. Access the app at http://localhost:3000/health.
8. Make file changes and it will automatically rebuild the app.

## Documentation

checkout below endpoint for swagger documentation

```
  /api/v1/docs
```

## Running All Tests

```bash
yarn docker-compose:test
```

## Running All Tests (with coverage)

```bash
yarn docker-compose:test:cov
```

## Running Tests (Watch)

1. Build and run the Docker image.

```bash
yarn docker-compose:test:watch
```

2. Make file changes and it will automatically rerun tests related to changed files.

## Build For Production

```bash
yarn docker-compose:prod
```

## Demo Video of Backend

<p align="center">
  <img src="./Demo of Answer AI backend.gif" alt="Sublime's custom image" />
</p>
