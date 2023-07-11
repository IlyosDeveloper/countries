import { Sequelize } from "sequelize";

const db = new Sequelize( 'countries', 'postgres', '12271996', {
  host: 'localhost',
  dialect: 'postgres'
});
try {
  await db.authenticate();
  console.log("Successfully.");
} catch (error) {
  console.error(error.message);
}

export default db;
