const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = Joi.object()
  .keys({
    BOT_TOKEN: Joi.string().required(),
    CLIENT_ID: Joi.string().required(),
    API_ACCESS_TOKEN: Joi.string().required(),
    API_URL: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  console.log(`ERROR: Missing ENV: ${error.message}`);
}

module.exports = {
  botToken: envVars.BOT_TOKEN,
  clientId: envVars.CLIENT_ID,
  apiAccessToken: envVars.API_ACCESS_TOKEN,
  apiUrl: envVars.API_URL,
};