# Database (db)

### Notes

- You can rapidly prototype db changes by altering `schema.schema` and then running `npm run db:push` at root. If doing so this will cause a "drift" and make the db out of sync with migration history. To fix this the do the following:
  1. Reset the database entirely
    1. `docker-compose down`
    2. `docker-compose up -d`
  2. Create a new migration
    1. `npm run db:migrate --run_command=--name <migration name here>`
