require('dotenv').config();//en caso de que  o exista el archivo .file con las variables definidas, se toman los valore por defecto al cumplirse el ||
require('./config/database');

const app = require('./app');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();