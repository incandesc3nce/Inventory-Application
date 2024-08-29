# Inventory-Application

This is an inventory application that allows users to add, update, delete and view items in the inventory. Movies, TV shows and animated media are taken as examples of items in the inventory. They are distinguished by categories ( `Movies`, `TV Shows` and `Animated`) and genres (e.g. `Action`, `Drama`, `Fantasy`, `Comedy` and others).

## Features

- Add items, categories and genres to the inventory
- Update items, categories and genres in the inventory
- Delete items, categories and genres from the inventory
- View items, categories and genres in the inventory

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=nodejs,ts,express,postgres&theme=dark)](https://github.com/incandesc3nce/)


## Live Preview

Live Preview is available on:
- [Railway](https://inventory-application-production-4134.up.railway.app/) (faster page load time)
- [Render](https://inventory-application-qkx3.onrender.com/) (use if Railway isn't available)


## Installation

1. Clone the repository

```bash
git clone https://github.com/incandesc3nce/Inventory-Application.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables

```
DB_URL - The URL to the PostgreSQL database (URL format: postgresql://dbuser:password@database.server.com:3211/mydb)
HOST - The host for the server (default is localhost)
PORT - The port for the server (default is 3000)
```

4. Create a PostgreSQL database named `inventory`, connect to it 
```sql
CREATE DATABASE inventory;
\c inventory; /* psql connect */
```
and run the following command in your terminal to populate the database with the necessary tables and example data

```bash
npm run populate
```

5. Start the server

```bash
npm start
```

6. Terminal will give you the URL to access the application

```bash
Server running at http://localhost:3000
```

## Feedback

If you liked the project, please give it a star⭐. It means a lot!🙂

If you want to report bugs, please open an issue or a pull request.
