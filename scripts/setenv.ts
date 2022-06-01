const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
   ? `./src/environments/environment.prod.ts`
   : `./src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
console.log(`Writing variables into ${targetPath}...`);
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   GOOGLE_GEOCODING_API_URL: "${process.env["GOOGLE_GEOCODING_API_URL"]}",
   GOOGLE_GEOCODING_API_KEY: "${process.env["GOOGLE_GEOCODING_API_KEY"]}",
   OPENWEATHERMAP_API_URL: "${process.env["OPENWEATHERMAP_API_URL"]}",
   OPENWEATHERMAP_API_KEY: "${process.env["OPENWEATHERMAP_API_KEY"]}"
};
`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
   if (err) {
      console.log(err);
   }
   console.log(`Wrote variables to ${targetPath}`);
})
;