# Personal Website sirmud.com

# Features
- Display news & events 
- Display about page
- Display store with merch
- Organize and manage user profiles
- Ability to purchase event tickets from website. 

## ***Server***

### Dependencies

- express
- express-session
- dotenv
- bcrypt
- massive

### Endpoints

***auth***

- login => /auth/login
- register => /auth/register
- logout => /auth/logout
- userSession => /api/user_session

***Cart Controller***

- add => /api/add
- remove => /api/remove
- update => /api/update
- checkout => /api/checkout

***User Controller***

- updateInfo => /api/update_info

## ***Client***

### Dependencies ###

- axios
- redux
- react-redux
- react-router-dom
- http-proxy-middleware
- redux-promise-middleware

### Routes ###

- Home => home(/)
- About => about(/about)
- Store => store(/store)
- Account => login(/login)


### File Structure ###

- src/
    - App.js
    - App.css
    - reset.css
    - index.js
    - components/
        - Home.js / .css
        - About.js / .css
        - Store.js / .css
        - Account.js / .css
    - reducks/
        - reducer.js
        - store.js
    - setUpProxy.js


## ***DataBase***

- Users
```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(80) NOT NULL,
    hash TEXT NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL
)
```

- Products
```sql
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    img_url TEXT NOT NULL,
    price INTEGER NOT NULL,
    category VARCHAR (30)
)
```

- Shows
```sql
CREATE TABLE shows (
    show_id SERIAL PRIMARY KEY,
    city VARCHAR(40) NOT NULL,
    show_date DATE NOT NULL,
    venue VARCHAR(40) NOT NULL,
    price INTEGER NOT NULL
)
```

- Music


