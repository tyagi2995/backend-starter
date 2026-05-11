# Backend Project

Backend project using Node.js, Express, Sequelize, and MySQL.

## Packages Used

- express → API & routing
- sequelize → ORM for database handling
- mysql2 → MySQL database connection
- joi → Request validation
- dotenv → Environment variables management
- nodemon → Auto restart server during development
- sequelize-cli → Sequelize migrations & models

---

## Installation

```bash
npm install express sequelize mysql2 joi dotenv

npm install nodemon --save-dev
npm install sequelize-cli --save-dev
```

---

## Sequelize Setup

```bash
npx sequelize-cli init
```

Creates:

```bash
config/
models/
migrations/
seeders/
```

---

## Run Project

Development:

```bash
npx nodemon app.js
```

Production:

```bash
node app.js
```

---

## Recommended Structure

```bash
project/
│
├── config/
├── models/
├── migrations/
├── seeders/
├── routes/
├── controllers/
├── middleware/
├── validations/
├── .env
├── app.js
└── package.json
```

<!-- npm install cors -->
