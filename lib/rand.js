"use strict";
const randomInt = require('random-int');

const lists = require("./lists");

const NUM_ADJ = lists.adjectives.length - 1;
const NUM_ANIMAL = lists.animals.length - 1;

module.exports = {
	randomAdjective() {
		const num = randomInt(0, NUM_ADJ);

		if (lists.adjectives[num]) {
			return lists.adjectives[num];
		}

		return randomAdj();
	},

	randomAnimal() {
		const num = randomInt(0, NUM_ANIMAL);

		if (lists.animals[num]) {
			return lists.animals[num];
		}

		return randomAnim();
	}
};