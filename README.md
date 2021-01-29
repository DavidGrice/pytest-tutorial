# pytest-tutorial
## Purpose: To use Selenium, Nodejs, Expressjs, Python and Pytest for unit testing.
### Thanks To Computer Hope for Website Tutorial
https://www.computerhope.com/issues/ch002076.htm

## Steps to setup project
### * Download IDE's
1) VSCODE - https://code.visualstudio.com/
2) PYCHARM - https://www.jetbrains.com/pycharm/
### * Download Chrome Driver
1) CHROME DRIVER - https://chromedriver.chromium.org/downloads
### * Download core files
1) https://github.com/DavidGrice/pytest-tutorial/tree/master
### * Download Node
1) https://nodejs.org/en/
2) Windows - npm install npm -g
3) Linux/Macos - sudo npm install npm -g
### * Download Express Generator
1) Windows - npm install express-generator -g
2) Linux/Macos - sudo npm install express-generator -g
### * Install node files
1) cd myapp
2) npm install
3) npm install nodemon --save-dev
4) npm install sqlite3 --save
### * Change package.json file
1) Windows - "devstart": "SET DEBUG=myapp:* & nodemon ./bin/www"
2) Linux/Macos - "devstart": "DEBUG=myapp:* nodemon ./bin/www"
### * Install sqlite3
1) Windows - https://sqlite.org/download.html
2) Macos - sudo port install sqlite3
         - brew install sqlite
3) Linux - sudo apt install sqlite3
### * Initiate database
1) cd database
2) sqlite3 db.sqlite
3) .read init/db.sql
### * Update database information
1) UPDATE items SET qty = 6 WHERE name = 'Eggs';
2) INSERT INTO items (name, price) VALUES 
   ('Parsley', 100), 
   ('Spinach', 350);
3) .quit
