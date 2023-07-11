import { Sequelize } from "sequelize";


  
  const db = new Sequelize(
    "postgres://countries_un6b_user:2rNX2KbEhT2S6oRZlxxpxE8dvvWDhFQw@dpg-cimjtrdgkuvgvh927en0-a.singapore-postgres.render.com/countries_un6b",
  {
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
  }
);

// const db = new Sequelize( 'countries', 'postgres', '12271996', {
//   host: 'localhost',
//   dialect: 'postgres'
// });
try {
  await db.authenticate();
  console.log("Successfully.");
} catch (error) {
  console.error(error.message);
}

export default db;
