const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'sql.freedb.tech',
    user     : 'freedb_roote@130.61.50.164',
    password : 'CmxwKJ35y@#R@B*',
    database : 'freedb_login_node_curso',
    port     : 3306  // Agregar el puerto aquí
});

connection.connect((error) => {
    if (error) {
        console.error('El error de conexión es: ' + error);
        return;
    }
    console.log('¡Conectado a la Base de Datos!');
});

module.exports = connection;
