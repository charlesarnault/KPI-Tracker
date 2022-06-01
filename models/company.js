const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const CompanySchema = new Schema({
  name: {type: String, required: true},
  linkedin_url: String,
  instagram_url: String
});

// Create model for todo
const Company = mongoose.model('companies', CompanySchema);

module.exports = Company;