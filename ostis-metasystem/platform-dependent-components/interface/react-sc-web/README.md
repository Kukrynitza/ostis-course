# react-sc-web

## Installation

First of all **clone the project on you local machine**.

```sh
git clone git@github.com:ostis-ai/react-sc-web.git
cd react-sc-web
```

Note that this project has runtime dependency on [sc-web](https://github.com/ostis-ai/sc-web) [feature/add-scg-iframe](https://github.com/ostis-ai/sc-web/tree/feature/add-scg-iframe) branch, which must be up and running with **allowed origins** (`python3 sc-web/server/app.py --allowed_origins=http://localhost:3000`).

Appropriate backend must be up as well. 

### Production

In order to get working production build one needs to configure a web-server to serve builded project files.

This project provides a docker support for this purpose and it's also the most simple way to run the interface in production.

```sh
cd docker
docker compose build
docker compose up
```

Otherwise one can configure its own web-server of choice. When doing so you need to get the production build first.

**Install dependencies and create production build**

```sh
npm install
npm run build
```

### Development

**Install dependencies**

```sh
npm install
```

**Run sc-web with allowed_origins**

```sh
python3 server/app.py --allowed_origins=http://localhost:3000
```

**Run react-sc-web**

```sh
npm run start
```

Application starts on port 3000 by default.

## Develop with **Docker** in another project

Example is shown with [ostis-web-platform](https://github.com/ostis-ai/ostis-web-platform) project

Change the `docker-compose.yml` using any editor to allow the origin of react-sc-web:
```yaml
services:
  web:
     image: ostis/sc-web:0.9.0
     build:
       context: ./sc-web
     restart: unless-stopped
     command:
       - "--server-host=machine"
       - "--allowed_origins=http://localhost:3000" # <- add this line
     ports:
       - "8000:8000"
```

Then proceed in the terminal:

```sh
docker compose run machine build # build kb
docker compose up # or run just the machine / web service, e.g. docker compose up machine
```

## Configuration

React-sc-web supports configuration via environment variables. To get more info on the available options check the `.env.example` file.

## Recommendations

The following IDE extensions are recommended for use.

[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) is a great help to avoid typos when naming variables and functions.

To analyze the code and find problems according to the given rules, described in .eslintrc.js file a [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is used.

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) is used to ensure that the overall style of the code is followed throughout the project. This extension is integrated with ESLint, but can have its own rules described in .prettierrc file.

## Files structure

```
├── public
│   └── index.html (template)
├── src
│   ├── @types
|   ├── api
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── model
│   ├── pages
│   ├── store
│   ├── utils
│   └── index.ts (entry point)
├── webpack
│   ├── webpack.config.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```
