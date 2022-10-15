const recipeComplexity = require('joi-password-complexity');
const complexityOptions = {
  min: 3,
  max: 60,
  lowerCase: 1,
  upperCase: 1,
  requirementCount: 2
};

module.exports.recipePass = (recipeToCheck) => {
  return recipeComplexity(complexityOptions, 'Recipe Name').validate(recipeToCheck);
};