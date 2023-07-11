import { Sequelize } from "sequelize";


  
  const db = new Sequelize(
    "postgres://countries_3wcv_user:aXsxRz2rBVCAsHqseWcVOPul7avEfbS5@dpg-cimkci6nqqldjqmbe200-a.singapore-postgres.render.com/countries_3wcv",
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
