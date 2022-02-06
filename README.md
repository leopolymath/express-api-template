# Example API

This Node API server with Express and Typescript is just a template to use freely in future projects.

### API docs

API docs are available in swagger [here](swagger.yaml).

### API Versioning

Each API version has its own router in src/routes. Each route calls different "domain" controllers, depending on the endpoint.

### Modules

Most of the code is a pretty standard Node backend with Typescript, Jest, etc. The meat is in the following modules:

- Controllers: talks HTTP, calls the underlying services to get the data they need.
- Services: HTTP agnostic, calls whatever dependency they need to return the data needed upstream.
- interfaces/types: types we use as a return object. We generate JSON schemas with these and we put them into the [swagger file](swagger.yaml).

## Development

This backend has been bootstraped using [typescript-express-starter](https://www.npmjs.com/package/typescript-express-starter)

### Before doing anything.

```bash
npm install --global yarn
```

```bash
yarn install
```

#### To start the API server

```bash
yarn dev
```

#### To run tests.

```bash
yarn test
```

### Typescript types to JSON schema

1. `npm install --save-dev typescript-json-schema`
2. `npx typescript-json-schema tsconfig.json FarmsPage --required`
