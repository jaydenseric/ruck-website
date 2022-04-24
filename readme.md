![Ruck logo](./public/logos/ruck.svg)

# Ruck website

The [ruck.tech](https://ruck.tech) website for
[Ruck](https://github.com/jaydenseric/ruck), an open source buildless
[React](https://reactjs.org) web application framework for
[Deno](https://deno.land).

## Requirements

- [Deno CLI](https://deno.land/#installation) v1.20.1+.

## Installation

For a local development installation, create a project `scripts/.env.sh` file
containing the following environment variables, with values customized for your
local environment:

```sh
# Development or production mode; "true" or "false".
export RUCK_DEV="true"

# The localhost port to serve the Ruck app on.
export RUCK_PORT="3000"

# GitHub access token used with the GitHub GraphQL API to query the
# jaydenseric/ruck repo releases for the releases related Ruck app routes.
export ACCESS_TOKEN_GITHUB=""
```

## Scripts

### Dev

To load the environment variables from `scripts/.env.sh`, make the environment
variable modules, and serve the Ruck app:

```sh
./scripts/dev.sh
```

### Make public environment variable modules

To make the public environment variable modules (requires environment
variables):

```sh
./scripts/makeEnvModules.sh
```

### Serve

To serve the Ruck app for either development or production (requires environment
variables):

```sh
./scripts/serve.sh
```

### Format

To format the project:

```sh
deno fmt
```

### Lint

To lint the project:

```sh
deno lint
```
