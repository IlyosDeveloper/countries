import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import countryRouter from "./src/controller/counties.controller.js";
import Country from "./src/modules/countries.module.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/country", countryRouter);

// let data = [];
// try {
//   data = await axios("https://restcountries.com/v3.1/all").then((res) =>
//     res.data
//   );
// } catch (err) {
//   console.log(err.message);
// }
// data?.map((item) => {
//   const {
//     name,
//     capital,
//     currencies,
//     region,
//     subregion,
//     languages,
//     flags,
//     population,
//     borders,
//   } = item;
//   try {
//     Country.create({
//       name: name.common,
//       capital: capital ? capital[0] : null,
//       region: region,
//       subRegion: subregion,
//       flag: flags.png,
//       population: population,
//       nativeName: name?.nativeName && Object.values(name.nativeName)[0]?.common,
//       currency: currencies && Object.values(currencies)[0]?.name,
//       language: languages && Object.values(languages),
//       borderCountries: borders,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
