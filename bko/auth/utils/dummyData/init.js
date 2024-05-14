const fs = require('fs');
require('colors');
const dotenv = require('dotenv');
const Role = require('../../models/roleModel');
const dbConnection = require('../../config/database');

dotenv.config({ path: '../../config.env' });

// connect to DB
dbConnection();

// Read data
const roles = JSON.parse(fs.readFileSync('./roles.json'));

const insertRolesData = async () => {
  try {
    await Role.create(roles);

    console.log('Data Inserted'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from DB
const destroyRoleData = async () => {
  try {
    await Role.deleteMany();
    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// node seeder.js -d
if (process.argv[2] === '-ir') {
  insertRolesData();
} else if (process.argv[2] === '-dr') {
  destroyRoleData();
}