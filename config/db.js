import mysql from 'mysql2';

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'sujit/0205', 
    database: 'contacts_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default db.promise();