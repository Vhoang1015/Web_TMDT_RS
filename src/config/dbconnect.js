// import mysql from 'mysql2/promise';

// const dbConnect = mysql.createPool({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
// });
// dbConnect.getConnection()
//     .then((connection) => {
//         console.log('Database connected successfully');
//         connection.release();
//     })
//     .catch((err) => {
//         console.error('Database connection failed:', err);
//         return process.exit(1);
//     });

// export default dbConnect;