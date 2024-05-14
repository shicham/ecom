const mongoose = require('mongoose');

const dbConnection = () => {
	mongoose.connect(process.env.DB_URI).then((conn) => {
		console.log(`Database Connected to host: ${conn.connection.host}`);
		console.log(`Database Connected to DB name: ${conn.connection.name}`);
	});
};

module.exports = dbConnection