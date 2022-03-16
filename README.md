# Seed Watch

- [What is Seed Watch?](#what-is-seed-watch)
- [Technologies](#technologies)
- [Installing Seed Watch](#installing-seed-watch)
  - [Dependencies](#dependencies)
  - [Additional Steps for Local Install](#additional-steps-for-local-install)
- [Running Seed Watch](#running-seed-watch)

## What is Seed Watch?

Organize and track your plant friends with Seed Watch! Create models of existing plants, add updates to your models, and explore other types of plants. An amazing way to log your plants growth!

## Technologies

Here are the technologies utilized for Grocer:

- Frontend
  - TypeScript
  - React
  - Redux
  - BootStraps
- Backend
  - Ruby
  - Rails
  - PostgreSQL

## Installing Seed Watch
### Dependencies

This project was built using Ruby version 2.7.4. To install the required gems, navigate to the root directory of this project and run this command:

```bash
bundle install
```

After installing the Ruby dependencies, install the Node modules by running this command in the root directory.

```bash
npm install --prefix client
```

### Additional Steps for Local Install

> To run this app locally, PostgreSQL will need to be installed. Please follow the official instructions on [PostgreSQL's site](https://www.postgresql.org/) to install.

Start your local PostgreSQL server. Once running, navigate to the root directory and run these commands to create the database and run the migrations:

```bash
rails db:create
rails db:migrate
```

## Running Seed Watch

Once all the dependencies are installed, Seed Watch can be started. First ensure that your local PostgreSQL server is running. Then start the backend by navigating to the root directory in your terminal and running this command:

```bash
rails s
```

Then the frontend can be started. Navigate to the root directory in another terminal window and run this command:

```bash
npm start --prefix client
```
