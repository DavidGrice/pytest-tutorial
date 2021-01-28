/* 
BACKEND PRE-REQS
1) Node
windows - npm install npm -g
linux/macos - sudo npm install npm -g
2) express generator
windows - npm install express-generator -g
linux/macos - sudo npm install express-generator -g
3) install node files
cd myapp
npm install
4) install nodemon
npm install nodemon --save-dev
5) Change package.json file
windows - "devstart": "SET DEBUG=myapp:* & nodemon ./bin/www"
linux/macos - "devstart": "DEBUG=myapp:* nodemon ./bin/www"
6) install sqlite3
windows - from website
macos - sudo port install sqlite3
      - brew install sqlite
linux - sudo apt install sqlite3
7) install sqlite module
npm install sqlite3 --save
8) initiate database
cd database
sqlite3 db.sqlite
.read init/db.sql
9) update database information
UPDATE items SET qty = 6 WHERE name = 'Eggs';
INSERT INTO items (name, price) VALUES 
  ('Parsley', 100), 
  ('Spinach', 350);
.quit
*/
/*
FRONTEND PRE-REQS
chromedriver
*/