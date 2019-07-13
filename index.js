var {
	randomAdjective,
	randomAnimal
} = require("./lib/rand");

module.exports = function generate(count = 2) {
	return Array(count)
		.fill()
		.map(randomAdjective)
		.concat([randomAnimal()])
		.join('-');
};