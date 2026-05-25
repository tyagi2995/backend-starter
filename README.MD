# Sequelize CLI Commands

## Create Model

Generate a new model with migration file:

```bash
npx sequelize-cli model:generate --name Events --attributes name:string
```

---

## Run Single Migration

Run a specific migration file only:

```bash
npx sequelize-cli db:migrate --to 20260525094500-create-awardees.js
```

---

## Create Seeder

Generate a new seeder file:

```bash
npx sequelize-cli seed:generate --name demo-event-editions
```

---

# Database Commands

## Run All Pending Migrations

```bash
npx sequelize-cli db:migrate
```

## Undo Last Migration

```bash
npx sequelize-cli db:migrate:undo
```

## Undo All Migrations

```bash
npx sequelize-cli db:migrate:undo:all
```

---

# Seeder Commands

## Run All Seeders

```bash
npx sequelize-cli db:seed:all
```

## Undo Last Seeder

```bash
npx sequelize-cli db:seed:undo
```

## Undo All Seeders

```bash
npx sequelize-cli db:seed:undo:all
```

---

# Helpful Commands

## Undo Specific Migration

```bash
npx sequelize-cli db:migrate:undo --name 20260525094500-create-awardees.js
```

## Run Specific Seeder

```bash
npx sequelize-cli db:seed --seed 20260525094500-demo-event-editions.js
```

## Undo Specific Seeder

```bash
npx sequelize-cli db:seed:undo --seed 20260525094500-demo-event-editions.js
```
